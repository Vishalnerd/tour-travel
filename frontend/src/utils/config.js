export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://tour-travel-backend-mzsn.onrender.com/api/v1"
    : "http://localhost:4000/api/v1";
