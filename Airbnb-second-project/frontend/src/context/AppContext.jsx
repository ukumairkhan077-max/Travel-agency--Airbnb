import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import seedHomes from "../data/dummylisting";
import seedServices from "../data/services";

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

  const addHome = useCallback((home) => {
    setCreatedHomes((prev) => [home, ...prev]);
  }, []);

  const updateHome = useCallback((id, updates) => {
    setCreatedHomes((prev) =>
      prev.map((home) => (home.id === id ? { ...home, ...updates } : home))
    );
  }, []);

  const deleteHome = useCallback((id) => {
    setCreatedHomes((prev) => prev.filter((home) => home.id !== id));
  }, []);

  const addService = useCallback((service) => {
    setCreatedServices((prev) => [service, ...prev]);
  }, []);

  const updateService = useCallback((id, updates) => {
    setCreatedServices((prev) =>
      prev.map((service) => (service.id === id ? { ...service, ...updates } : service))
    );
  }, []);

  const deleteService = useCallback((id) => {
    setCreatedServices((prev) => prev.filter((service) => service.id !== id));
  }, []);

  const addBooking = useCallback((booking) => {
    setBookings((prev) => [booking, ...prev]);
    return booking;
  }, []);

  const loginHost = useCallback((host) => setCurrentHost(host), []);
  const logoutHost = useCallback(() => setCurrentHost(null), []);

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