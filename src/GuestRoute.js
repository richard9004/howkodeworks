import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoute = () => {
    const user = useSelector((state) => state.user);
    const location = useLocation();
  
    if (user.userInfo != null && (location.pathname === '/sign-in' || location.pathname === '/sign-up')) {
      return <Navigate to='/dashboard' replace />;
    }
  
    return <Outlet />;
  };

export default GuestRoute;
