import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const user = useSelector((state)=>state.user);
    console.log('NULLL');
    console.log(user.userInfo);

    return user.userInfo ? <Outlet /> : <Navigate to='/sign-in' replace />
}

export default PrivateRoute;
