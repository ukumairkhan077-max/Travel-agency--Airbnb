import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

function storageKeyFor(guestId) {
  return `airbnb_clone_wishlist_${guestId}`;
}

function loadWishlist(guestId) {
  if (!guestId) return [];
  try {
    const raw = localStorage.getItem(storageKeyFor(guestId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const { guestUser } = useAuth();
  const [items, setItems] = useState(() => loadWishlist(guestUser?.id));
  const [lastGuestId, setLastGuestId] = useState(guestUser?.id);

  // Reload the wishlist whenever the logged-in guest changes (login/logout/
  // switch). Adjusted during render (React's recommended pattern for this),
  // rather than in an effect, to avoid an extra render pass.
  if (guestUser?.id !== lastGuestId) {
    setLastGuestId(guestUser?.id);
    setItems(loadWishlist(guestUser?.id));
  }

  useEffect(() => {
    if (!guestUser?.id) return;
    try {
      localStorage.setItem(storageKeyFor(guestUser.id), JSON.stringify(items));
    } catch {
      // Ignore quota / serialization errors.
    }
  }, [items, guestUser?.id]);

  const isSaved = useCallback(
    (type, id) => items.some((item) => item.type === type && item.id === id),
    [items]
  );

  const toggleWishlist = useCallback((type, id, meta = {}) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.type === type && item.id === id);
      if (exists) {
        return prev.filter((item) => !(item.type === type && item.id === id));
      }
      return [...prev, { type, id, ...meta, savedAt: new Date().toISOString() }];
    });
  }, []);

  const value = { items, isSaved, toggleWishlist };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}
