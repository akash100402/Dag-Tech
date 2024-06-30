import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyEmployeePrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser.isEmployee ? <Outlet /> : <Navigate to="/sign-in" />;
}



