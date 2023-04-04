import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginAction from "../component/LoginAction";
import { useState } from "react";
import { doLogin } from '../axios/api';

const Login = () => {

   const navigate =  useNavigate();
   const authContext = useAuth();

   const [login, setLogin] = useState({ email:"", password:"" })

   const emailChangeHandler = (e) =>{
        setLogin((prevState)=> ({...prevState, email: e.target.value}))
   }

   const passwordChangeHandler = (e) =>{
        setLogin((prevState)=> ({...prevState, password: e.target.value}))
   }


    const onLoginHandler = async(e) =>{
        e.preventDefault();
        const response = await doLogin(login);
        console.log(response)
        // authContext.setAuthToken("kfaskfjaljoeiruwoieuroiewu rojlfkjflkdsjf fklsjflkasjf lksjfklsdjf");
        // navigate('/')
    }



    return (
        <div>
            <Card style={{ padding: "20px", width:"400px" }}>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                    <Form onSubmit={onLoginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={login.email} onChange={emailChangeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={login.password} onChange={passwordChangeHandler} />
                        </Form.Group>
                        <LoginAction/>
                    </Form>

                </Card.Body>
            </Card>

        </div>
    )

}

export default Login;