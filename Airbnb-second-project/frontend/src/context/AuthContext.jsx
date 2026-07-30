import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { apiRequest } from "../utils/api";

const AuthContext = createContext(null);

// Only the token is persisted — the guest profile itself is always re-fetched
// from the server (GET /api/auth/me) on load, so it can never go stale.
const TOKEN_KEY = "airbnb_clone_guest_token";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [guestUser, setGuestUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // On first load (or refresh), if a token is saved, validate it against
  // the backend and restore the session. If it's invalid/expired, clear it.
  useEffect(() => {
    let cancelled = false;

    async function restoreSession() {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await apiRequest("/auth/me", { token });
        if (!cancelled) setGuestUser(data.guest);
      } catch {
        if (!cancelled) {
          setToken(null);
          localStorage.removeItem(TOKEN_KEY);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    restoreSession();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function persistToken(nextToken) {
    setToken(nextToken);
    if (nextToken) {
      localStorage.setItem(TOKEN_KEY, nextToken);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  const signup = useCallback(async ({ fullName, email, password }) => {
    const data = await apiRequest("/auth/signup", {
      method: "POST",
      body: { fullName, email, password },
    });
    persistToken(data.token);
    setGuestUser(data.guest);
    return data.guest;
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body: { email, password },
    });
    persistToken(data.token);
    setGuestUser(data.guest);
    return data.guest;
  }, []);

  const logout = useCallback(async () => {
    persistToken(null);
    setGuestUser(null);
  }, []);

  const value = {
    guestUser,
    token,
    isAuthenticated: Boolean(guestUser),
    isLoading,
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