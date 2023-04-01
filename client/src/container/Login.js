import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

   const navigate =  useNavigate();
   const authContext = useAuth();


    const onLoginHandler = (e) =>{
        e.preventDefault();
        authContext.setAuthToken("kfaskfjaljoeiruwoieuroiewu rojlfkjflkdsjf fklsjflkasjf lksjfklsdjf");
        navigate('/')
    }

    return (
        <div>
            <Card style={{ padding: "20px", width:"400px" }}>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                    <Form onSubmit={onLoginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link to="../forgot-password" relative="path">Forgot Password</Link>
                    </Form>

                </Card.Body>
            </Card>

        </div>
    )

}

export default Login;