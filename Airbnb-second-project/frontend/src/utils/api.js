// Central place for backend configuration. Until the backend exists, every
// context function below still runs against localStorage — but it's already
// shaped as an async call, so wiring the real API later means changing the
// *inside* of these functions only, not every component that calls them.

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/**
 * Wraps a synchronous local action (localStorage read/write, state update)
 * in a Promise so it can be `await`-ed and can `throw`/reject just like a
 * real fetch() call will. When the backend is ready, replace the body of
 * the function passed to this helper with an actual `fetch(...)` call —
 * every component calling it already awaits and handles errors correctly.
 */
export function simulateRequest(action) {
  return new Promise((resolve, reject) => {
    try {
      const result = action();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
