import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivatRoute = ({children}) => {
    const {user, loading} = useAuth();
    let location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user) {
        return children;
    }
    return (
        <Navigate to = "/login" state={{from: location}} replace/>
    );
};

export default PrivatRoute;