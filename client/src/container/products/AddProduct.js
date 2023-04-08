import { Form, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { doCreateProduct } from "../../axios/api";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
    name: yup.string().required("Name is required"),
    brand: yup.string().required("Brand is required"),
    description : yup.string().max(100, "Description should not be more than 100 char").required("Description is Required"),
    price: yup.number().typeError("Price is required"),
    qty: yup.number().typeError("Qty is Required"),
    category: yup.array().typeError("Select Category").min(1, "Atleast one category should be selected")
  }).required();

//TODO qty custome message

const MultiCheckBox = () =>{

    const category = [
        { name: "Electronic", checked: false },
        { name: "Stationary", checked: false },
        { name: "Toys", checked: false },
        { name: "Fashion", checked: false }
    ]

    const handleOnChange = (e, name)=>{
       const index = category.findIndex(item => item.name ==name );
       category[index].checked = !category[index].checked
    }

    return(
        <>
            {
                category.map(item => (
                    <Form.Check
                        key={item.name}
                        inline
                        label={item.name}
                        name="group1"
                        type='checkbox'
                        id="inline_chk_1"
                        onChange={(e)=> handleOnChange(e, item.name)}
                    />
                ))
            }           
        </>
    )
}



const AddProduct = () => {




    const category = [
        { name: "Electronic", checked: false },
        { name: "Stationary", checked: false },
        { name: "Toys", checked: false },
        { name: "Fashion", checked: false }
    ]

   const { register, handleSubmit, formState : {  errors } } = useForm({
     resolver: yupResolver(schema)
   });



   const navigate = useNavigate();

   const handleFormSubmit = async(data) =>{
        console.log(data);
        // const result = await doCreateProduct(data);
        // console.log(result);
        // navigate('/product/list');
   }



    return (
        <>
        <h3>Add Product</h3>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" {...register('name')} />
                <Form.Text className="text-danger">
                    {errors.name?.message}
                </Form.Text>
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
                <Form.Text className="text-danger">
                    {errors.brand?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description" {...register('description')} />
                <Form.Text className="text-danger">
                    {errors.description?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter email" {...register('price')} />
                <Form.Text className="text-danger">
                    {errors.price?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Qty</Form.Label>
                <Form.Control type="number" placeholder="Enter email" {...register('qty')} />
                <Form.Text className="text-danger">
                    {errors.qty?.message}
                </Form.Text>
            </Form.Group>
            {
                category.map(item => (
                    <Form.Check
                        key={item.name}
                        inline
                        label={item.name}
                        name="group1"
                        value={item.name}
                        type='checkbox'
                        {...register('category')}
                    />
                ))
            }   
            <div>
            <Form.Text className="text-danger">
                    {errors.category?.message}
                </Form.Text>
            </div>  
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default AddProduct;