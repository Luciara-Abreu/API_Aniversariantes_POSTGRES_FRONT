import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);
  return signed ? <Outlet /> : <Navigate to="/" />;
};
//https://www.youtube.com/watch?v=XjNs_OM6m8A