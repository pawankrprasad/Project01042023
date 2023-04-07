import { Outlet } from "react-router-dom";

const Product = () =>{
    return (
        <>
            <h1>Product Management</h1>
            <Outlet/>
        </>
    )
}

export default Product;