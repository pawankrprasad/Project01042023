import { Route, Routes } from "react-router-dom"
import Account from "./layout/Account"
import Login from "./container/Login"
import Main from "./layout/Main"
import Home  from './container/Home';
import ForgotPassword from "./container/ForgotPassword";

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account />}>
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="/" element={<Main />}>
                <Route path="" element={< Home />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
    )
}

export default AppRouters;