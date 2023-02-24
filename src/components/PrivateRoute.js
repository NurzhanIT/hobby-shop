import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = useSelector((user) => user.user.user_auth);
  return user ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoute;
