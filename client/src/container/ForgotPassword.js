import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {


   
    const onLoginHandler = (e) =>{
        e.preventDefault();
        alert("Reset Link send to you on your registered email adddress..");
    }

    return (
        <div>
            <Card style={{ padding: "20px", width:"400px" }}>
                <Card.Title>Forgot Password</Card.Title>
                <Card.Body>
                    <Form onSubmit={onLoginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )

}

export default ForgotPassword;