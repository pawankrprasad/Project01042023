
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderNavBar from "../component/HeaderNavBar";
import  { useAuth } from '../context/AuthContext';


const ProtectedPage = () =>{
    return(
        <>
        <HeaderNavBar />
        <Outlet />
    </>
    )
}

const Main = () => {
    const authContext = useAuth();
    return (
        <> { authContext.token ? <ProtectedPage/> : <Navigate to="/account/login" />} </>
    )
}

export default Main;