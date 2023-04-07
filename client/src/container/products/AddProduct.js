import { Form, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { doCreateProduct } from "../../axios/api";
import { useNavigate } from "react-router-dom";



const AddProduct = () =>{

   const { register, handleSubmit} = useForm();
   const navigate = useNavigate();

   const handleFormSubmit = async(data) =>{
        console.log(data);
        const result = await doCreateProduct(data);
        console.log(result);
        navigate('/product/list');
   }

    return (
        <>
        <h3>Add Product</h3>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" {...register('name')} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Select {...register('brand')}>
                    <option>Select Brand</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="HP">HP</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description" {...register('description')} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter email" {...register('price')} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Qty</Form.Label>
                <Form.Control type="number" placeholder="Enter email" {...register('qty')} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default AddProduct;