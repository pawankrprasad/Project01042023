import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { doLogin } from '../axios/api';

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
 
const Login = () => {

    const style = {
        display: "flex",
        justifyContent: "space-between"
    }


   const navigate =  useNavigate();
   const authContext = useAuth();

  const { register, formState:  { isValid, errors },  handleSubmit} = useForm();

  console.log(errors);
    const onLoginHandler = async(data) =>{

        try{
            const {token, name} = await doLogin(data);
            authContext.createSession(token, name);
            navigate('/')
        }catch(error){
            toast.error(error.error)
        }
    }

    return (
        <div>
            <Card style={{ padding: "20px", width:"400px" }}>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onLoginHandler)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" 
                            placeholder="Enter email" 
                            name = "email"
                            {...register('email', {required: "Email Field is required"})}
                            />
                            <Form.Text className="text-danger">
                                 {errors.email?.message}
                            </Form.Text>
                            <span></span>
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name = "password"
                            {...register('password', { required: "Password Field is required" })}
                            />
                            <Form.Text className="text-danger">
                                 {errors.password?.message}
                            </Form.Text>
                        </Form.Group>   
                            <div style={style}>
                                <Button variant="primary" type="submit" disabled={!isValid} >
                                    Login
                                </Button>
                                <Link to="../forgot-password" relative="path">Forgot Password</Link>
                            </div>
                        
            
                    </Form>

                </Card.Body>
            </Card>
        </div>
    )

}

export default Login;