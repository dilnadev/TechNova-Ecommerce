import { Navigate, Outlet } from "react-router";

export default function AdminGuard() {
  const userId = localStorage.getItem("userId");
  const role   = localStorage.getItem("role");

  if (!userId || role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
