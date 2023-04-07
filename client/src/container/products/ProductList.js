import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { doGetProductList } from "../../axios/api";
import { useNavigate } from "react-router-dom";


const TableRow = ({item}) =>{
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
        </tr>
    )
}

const ProductList = () =>{

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        loadProduct();


    },[]);

    const loadProduct = async() =>{
        const result = await doGetProductList();
        console.log(result)
        setProducts(result)
    }

    return (
        <>
        <h3>Product List</h3>
        <Button type="button" onClick={()=> navigate('/product/add')} >Add New Product</Button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>    
            {products.map(item => <TableRow key={item.id} item={item}/>)}
      </tbody>
    </Table>
        </>
       
    )
}

export default ProductList;