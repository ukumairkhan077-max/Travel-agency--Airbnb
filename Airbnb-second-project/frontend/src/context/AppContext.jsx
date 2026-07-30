import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { apiRequest } from "../utils/api";
import { useAuth } from "./AuthContext";

const AppContext = createContext(null);

const HOST_TOKEN_KEY = "airbnb_clone_host_token";

// Mongo documents come back as `_id` — the rest of this app (routes, list
// keys, edit/delete lookups) was built around a plain `id` field, so every
// document is normalized once here rather than touching every component.
function withId(doc) {
  if (!doc) return doc;
  return { ...doc, id: doc._id ?? doc.id };
}

function withIds(docs) {
  return (docs || []).map(withId);
}

export function AppProvider({ children }) {
  const { token: guestToken, guestUser } = useAuth();

  const [homes, setHomes] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [hostToken, setHostToken] = useState(() => localStorage.getItem(HOST_TOKEN_KEY));
  const [currentHost, setCurrentHost] = useState(null);

  function persistHostToken(nextToken) {
    setHostToken(nextToken);
    if (nextToken) {
      localStorage.setItem(HOST_TOKEN_KEY, nextToken);
    } else {
      localStorage.removeItem(HOST_TOKEN_KEY);
    }
  }

  // Public catalogue — every listing/services page reads from this, so it's
  // loaded once on mount straight from the database.
  useEffect(() => {
    apiRequest("/homes")
      .then((data) => setHomes(withIds(data)))
      .catch((err) => console.error("Couldn't load homes:", err.message));

    apiRequest("/services")
      .then((data) => setServices(withIds(data)))
      .catch((err) => console.error("Couldn't load services:", err.message));
  }, []);

  // Restore the host session on load if a token was saved.
  useEffect(() => {
    let cancelled = false;

    if (!hostToken) return undefined;

    apiRequest("/host/auth/me", { token: hostToken })
      .then((data) => {
        if (!cancelled) setCurrentHost(withId(data.host));
      })
      .catch(() => {
        if (!cancelled) persistHostToken(null);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hostToken]);

  // Pull in whichever bookings the logged-in guest and/or host can see.
  // Both GuestTrips ("my trips") and HostBookings ("bookings on my homes")
  // read from this same merged list and filter it client-side.
  const refreshBookings = useCallback(async () => {
    const results = await Promise.all([
      guestToken
        ? apiRequest("/bookings/mine", { token: guestToken }).catch(() => [])
        : Promise.resolve([]),
      hostToken
        ? apiRequest("/bookings/host/mine", { token: hostToken }).catch(() => [])
        : Promise.resolve([]),
    ]);

    const merged = new Map();
    withIds(results[0])
      .concat(withIds(results[1]))
      .forEach((booking) => merged.set(booking.id, booking));

    setBookings(Array.from(merged.values()));
  }, [guestToken, hostToken]);

  useEffect(() => {
    refreshBookings();
  }, [refreshBookings]);

  // ------------------------------------------------------------------
  // Homes (host-only writes)
  // ------------------------------------------------------------------

  const addHome = useCallback(
    async (home) => {
      const created = withId(
        await apiRequest("/homes", { method: "POST", body: home, token: hostToken })
      );
      setHomes((prev) => [created, ...prev]);
      return created;
    },
    [hostToken]
  );

  const updateHome = useCallback(
    async (id, updates) => {
      const updated = withId(
        await apiRequest(`/homes/${id}`, { method: "PUT", body: updates, token: hostToken })
      );
      setHomes((prev) => prev.map((home) => (home.id === id ? updated : home)));
      return updated;
    },
    [hostToken]
  );

  const deleteHome = useCallback(
    async (id) => {
      await apiRequest(`/homes/${id}`, { method: "DELETE", token: hostToken });
      setHomes((prev) => prev.filter((home) => home.id !== id));
      return id;
    },
    [hostToken]
  );

  // ------------------------------------------------------------------
  // Services (host-only writes)
  // ------------------------------------------------------------------

  const addService = useCallback(
    async (service) => {
      const created = withId(
        await apiRequest("/services", { method: "POST", body: service, token: hostToken })
      );
      setServices((prev) => [created, ...prev]);
      return created;
    },
    [hostToken]
  );

  const updateService = useCallback(
    async (id, updates) => {
      const updated = withId(
        await apiRequest(`/services/${id}`, { method: "PUT", body: updates, token: hostToken })
      );
      setServices((prev) => prev.map((service) => (service.id === id ? updated : service)));
      return updated;
    },
    [hostToken]
  );

  const deleteService = useCallback(
    async (id) => {
      await apiRequest(`/services/${id}`, { method: "DELETE", token: hostToken });
      setServices((prev) => prev.filter((service) => service.id !== id));
      return id;
    },
    [hostToken]
  );

  // ------------------------------------------------------------------
  // Bookings (guest-only writes)
  // ------------------------------------------------------------------

  const addBooking = useCallback(
    async (booking) => {
      const created = withId(
        await apiRequest("/bookings", {
          method: "POST",
          body: {
            homeId: booking.homeId,
            serviceId: booking.serviceId || null,
            checkIn: booking.checkIn,
            checkOut: booking.checkOut,
            guests: booking.guests,
            paymentMethod: booking.paymentMethod,
            total: booking.total,
          },
          token: guestToken,
        })
      );
      setBookings((prev) => [created, ...prev]);
      return created;
    },
    [guestToken]
  );

  // ------------------------------------------------------------------
  // Host auth
  // ------------------------------------------------------------------

  const signupHost = useCallback(async (hostData) => {
    const data = await apiRequest("/host/auth/signup", { method: "POST", body: hostData });
    persistHostToken(data.token);
    setCurrentHost(withId(data.host));
    return data.host;
  }, []);

  const loginHost = useCallback(async ({ email, password }) => {
    const data = await apiRequest("/host/auth/login", {
      method: "POST",
      body: { email, password },
    });
    persistHostToken(data.token);
    setCurrentHost(withId(data.host));
    return data.host;
  }, []);

  const logoutHost = useCallback(async () => {
    persistHostToken(null);
    setCurrentHost(null);
  }, []);

  // Only homes/services created by the currently logged-in host, for the
  // "My Homes" / "My Services" / dashboard stats pages.
  const myHomes = useMemo(
    () => (currentHost ? homes.filter((home) => home.hostId === currentHost.id) : []),
    [homes, currentHost]
  );

  const myServices = useMemo(
    () => (currentHost ? services.filter((service) => service.hostId === currentHost.id) : []),
    [services, currentHost]
  );

  const value = {
    homes,
    services,
    bookings,
    currentHost,
    myHomes,
    myServices,
    addHome,
    updateHome,
    deleteHome,
    addService,
    updateService,
    deleteService,
    addBooking,
    signupHost,
    loginHost,
    logoutHost,
  };

  // guestUser isn't read directly here, but keeps this provider re-rendering
  // in step with login/logout so booking calls always use a fresh token.
  void guestUser;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}