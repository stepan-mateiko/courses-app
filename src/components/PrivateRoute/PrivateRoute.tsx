import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "../../store/index.ts";

const PrivateRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  if (user.role !== "admin") {
    return <Navigate to="/courses" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
