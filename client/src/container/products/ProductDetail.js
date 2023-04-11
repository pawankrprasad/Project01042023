import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doGetProduct } from "../../axios/api";


const ProductDetail = () =>{
    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        doGetProduct(id).then(response =>{
            setDetail(response)
        })
    },[]);

  
    return(
        <h1>Product Detail {detail.brand}</h1>
    )
}

export default ProductDetail;


