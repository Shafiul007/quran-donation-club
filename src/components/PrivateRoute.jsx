import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './Context/AuthProvider';


const PrivateRoute = ({children}) => {
    const { user, loading }=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="flex justify-center items-center p-4"><span className="loading loading-bars loading-lg"></span></div> 
    }

    if (user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;