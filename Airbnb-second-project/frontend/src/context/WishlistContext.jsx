import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "./AuthContext";
import { apiRequest } from "../utils/api";

const WishlistContext = createContext(null);

// Turns a populated wishlist entry from the backend
// ({ type, itemId: <populated Home|Service doc> }) into the flat shape
// the rest of the app already expects: { type, id, title, subtitle, image }.
function toWishlistItem(entry) {
  const item = entry.itemId;
  if (!item) return null;

  if (entry.type === "home") {
    return {
      type: "home",
      id: item._id,
      title: item.title,
      subtitle: item.location,
      image: item.images?.[0],
      savedAt: entry.createdAt,
    };
  }

  return {
    type: "service",
    id: item._id,
    title: item.title,
    subtitle: `${item.location?.city} · ${item.category}`,
    image: item.heroImage,
    savedAt: entry.createdAt,
  };
}

export function WishlistProvider({ children }) {
  const { guestUser, token } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!token) {
      setItems([]);
      return;
    }

    apiRequest("/wishlist", { token })
      .then((data) => setItems(data.map(toWishlistItem).filter(Boolean)))
      .catch((err) => console.error("Couldn't load wishlist:", err.message));
  }, [token]);

  const isSaved = useCallback(
    (type, id) => items.some((item) => item.type === type && item.id === id),
    [items]
  );

  const toggleWishlist = useCallback(
    async (type, id, meta = {}) => {
      const data = await apiRequest("/wishlist/toggle", {
        method: "POST",
        body: { type, itemId: id },
        token,
      });

      setItems((prev) => {
        const exists = prev.some((item) => item.type === type && item.id === id);
        if (!data.saved || exists) {
          return prev.filter((item) => !(item.type === type && item.id === id));
        }
        return [...prev, { type, id, ...meta, savedAt: new Date().toISOString() }];
      });

      return data.saved;
    },
    [token]
  );

  const value = { items, isSaved, toggleWishlist };

  // guestUser isn't read directly here, but keeping it as a dependency of
  // the provider's re-render cycle keeps the wishlist in step with login/logout.
  void guestUser;

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