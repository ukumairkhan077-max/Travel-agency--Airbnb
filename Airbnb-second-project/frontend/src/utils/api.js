// Central place for backend configuration and the one function every
// context uses to actually talk to the real Express/MongoDB backend.

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/**
 * Makes a real request to the backend and returns the parsed JSON body.
 * Throws an Error (with the backend's `message`) on any non-2xx response,
 * so every call site can keep using try/catch exactly like before.
 *
 * @param {string} path   e.g. "/auth/login" (appended to API_BASE_URL)
 * @param {object} options
 * @param {"GET"|"POST"|"PUT"|"DELETE"} [options.method="GET"]
 * @param {object} [options.body]   JSON-serializable request body
 * @param {string} [options.token]  Bearer token, if the route needs auth
 */
export async function apiRequest(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error(
      "Couldn't reach the server. Make sure the backend is running."
    );
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error((data && data.message) || `Request failed (${response.status}).`);
  }

  return data;
}