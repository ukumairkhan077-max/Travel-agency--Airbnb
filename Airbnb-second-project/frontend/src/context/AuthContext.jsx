import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext(null);

const STORAGE_KEYS = {
  accounts: "airbnb_clone_guest_accounts", // [{ id, fullName, email, password }]
  session: "airbnb_clone_guest_session", // currently logged-in guest (no password)
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

function generateGuestId() {
  return `guest-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function AuthProvider({ children }) {
  const [accounts, setAccounts] = useState(() =>
    loadFromStorage(STORAGE_KEYS.accounts, [])
  );
  const [guestUser, setGuestUser] = useState(() =>
    loadFromStorage(STORAGE_KEYS.session, null)
  );
  const [authError, setAuthError] = useState("");

  useEffect(() => saveToStorage(STORAGE_KEYS.accounts, accounts), [accounts]);
  useEffect(() => saveToStorage(STORAGE_KEYS.session, guestUser), [guestUser]);

  const signup = useCallback(
    ({ fullName, email, password }) => {
      setAuthError("");
      const normalizedEmail = email.trim().toLowerCase();

      const existing = accounts.find((acc) => acc.email === normalizedEmail);
      if (existing) {
        setAuthError("An account with this email already exists.");
        return false;
      }

      const account = {
        id: generateGuestId(),
        fullName: fullName.trim(),
        email: normalizedEmail,
        password, // demo-only: never store plaintext passwords in a real app
        createdAt: new Date().toISOString(),
      };

      setAccounts((prev) => [...prev, account]);
      setGuestUser({
        id: account.id,
        fullName: account.fullName,
        email: account.email,
        createdAt: account.createdAt,
      });
      return true;
    },
    [accounts]
  );

  const login = useCallback(
    ({ email, password }) => {
      setAuthError("");
      const normalizedEmail = email.trim().toLowerCase();

      const account = accounts.find((acc) => acc.email === normalizedEmail);
      if (!account || account.password !== password) {
        setAuthError("Incorrect email or password.");
        return false;
      }

      setGuestUser({
        id: account.id,
        fullName: account.fullName,
        email: account.email,
        createdAt: account.createdAt,
      });
      return true;
    },
    [accounts]
  );

  const logout = useCallback(() => {
    setGuestUser(null);
  }, []);

  const value = {
    guestUser,
    isAuthenticated: Boolean(guestUser),
    authError,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
