import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import seedHomes from "../data/dummylisting";
import seedServices from "../data/services";
import { simulateRequest } from "../utils/api";

const AppContext = createContext(null);

const STORAGE_KEYS = {
  homes: "airbnb_clone_created_homes",
  services: "airbnb_clone_created_services",
  bookings: "airbnb_clone_bookings",
  host: "airbnb_clone_current_host",
};

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota / serialization errors — the app still works in-memory.
  }
}

export function AppProvider({ children }) {
  const [createdHomes, setCreatedHomes] = useState(() =>
    loadFromStorage(STORAGE_KEYS.homes, [])
  );
  const [createdServices, setCreatedServices] = useState(() =>
    loadFromStorage(STORAGE_KEYS.services, [])
  );
  const [bookings, setBookings] = useState(() =>
    loadFromStorage(STORAGE_KEYS.bookings, [])
  );
  const [currentHost, setCurrentHost] = useState(() =>
    loadFromStorage(STORAGE_KEYS.host, null)
  );

  useEffect(() => saveToStorage(STORAGE_KEYS.homes, createdHomes), [createdHomes]);
  useEffect(() => saveToStorage(STORAGE_KEYS.services, createdServices), [createdServices]);
  useEffect(() => saveToStorage(STORAGE_KEYS.bookings, bookings), [bookings]);
  useEffect(() => saveToStorage(STORAGE_KEYS.host, currentHost), [currentHost]);

  // Host-created content is shown first, then the seed catalogue —
  // every page that lists homes/services reads from these merged arrays,
  // so creating/editing/deleting shows up everywhere instantly.
  const homes = useMemo(() => [...createdHomes, ...seedHomes], [createdHomes]);
  const services = useMemo(() => [...createdServices, ...seedServices], [createdServices]);

  // ------------------------------------------------------------------
  // Every mutating function below is wrapped in simulateRequest() so it
  // returns a Promise and can throw/reject like a real API call will.
  // When the backend exists, swap the body inside simulateRequest for a
  // `fetch(...)` call — call sites elsewhere in the app don't change.
  // ------------------------------------------------------------------

  const addHome = useCallback((home) => {
    return simulateRequest(() => {
      setCreatedHomes((prev) => [home, ...prev]);
      return home;
    });
  }, []);

  const updateHome = useCallback((id, updates) => {
    return simulateRequest(() => {
      setCreatedHomes((prev) =>
        prev.map((home) => (home.id === id ? { ...home, ...updates } : home))
      );
      return { id, ...updates };
    });
  }, []);

  const deleteHome = useCallback((id) => {
    return simulateRequest(() => {
      setCreatedHomes((prev) => prev.filter((home) => home.id !== id));
      return id;
    });
  }, []);

  const addService = useCallback((service) => {
    return simulateRequest(() => {
      setCreatedServices((prev) => [service, ...prev]);
      return service;
    });
  }, []);

  const updateService = useCallback((id, updates) => {
    return simulateRequest(() => {
      setCreatedServices((prev) =>
        prev.map((service) => (service.id === id ? { ...service, ...updates } : service))
      );
      return { id, ...updates };
    });
  }, []);

  const deleteService = useCallback((id) => {
    return simulateRequest(() => {
      setCreatedServices((prev) => prev.filter((service) => service.id !== id));
      return id;
    });
  }, []);

  const addBooking = useCallback((booking) => {
    return simulateRequest(() => {
      setBookings((prev) => [booking, ...prev]);
      return booking;
    });
  }, []);

  const loginHost = useCallback((host) => {
    return simulateRequest(() => {
      setCurrentHost(host);
      return host;
    });
  }, []);

  const logoutHost = useCallback(() => {
    return simulateRequest(() => {
      setCurrentHost(null);
    });
  }, []);

  // Only homes/services created by the currently logged-in host, for the
  // "My Homes" / "My Services" / dashboard stats pages.
  const myHomes = useMemo(
    () =>
      currentHost ? createdHomes.filter((home) => home.hostId === currentHost.id) : [],
    [createdHomes, currentHost]
  );

  const myServices = useMemo(
    () =>
      currentHost
        ? createdServices.filter((service) => service.hostId === currentHost.id)
        : [],
    [createdServices, currentHost]
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
    loginHost,
    logoutHost,
  };

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
