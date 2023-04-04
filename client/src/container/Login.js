import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginAction from "../component/LoginAction";
import { useState } from "react";
import { doLogin } from '../axios/api';

import { useForm } from "react-hook-form";

const Login = () => {

   const navigate =  useNavigate();
   const authContext = useAuth();

  const { register, formState:{isValid}, handleSubmit } = useForm();

  

   //const [login, setLogin] = useState({ email:"", password:"" })

   const emailChangeHandler = (e) =>{
        //setLogin((prevState)=> ({...prevState, email: e.target.value}))
   }

   const passwordChangeHandler = (e) =>{
        //setLogin((prevState)=> ({...prevState, password: e.target.value}))
   }


    const onLoginHandler = async(data) =>{
        
        console.log("data", data)
        
        const {token, name} = await doLogin(data);
        authContext.createSession(token, name);
        //navigate('/')
    }



    return (
        <div>
            <Card style={{ padding: "20px", width:"400px" }}>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onLoginHandler)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                            placeholder="Enter email" 
                            onChange={emailChangeHandler}
                            {...register('email', {required:"Enter your email address"})}
                            />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            
                            onChange={passwordChangeHandler}
                            {...register('password',{required: "Enter your password"})}
                            />
                        </Form.Group>
                        <LoginAction/>
                    </Form>

                </Card.Body>
            </Card>

        </div>
    )

}

export default Login;