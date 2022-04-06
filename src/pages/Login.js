import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { loginUser } from "../firebaseConfig";
import './Login.css'
import { setUserState } from "../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();  
// import { useHistory } from "react-router";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate()
  async function login(e) {
    e.preventDefault();
    try {
      const res = await loginUser(username, password);
      console.log(res);
      if (res) {
        dispatch(setUserState(res.user.email));
        // presentToast("You have logged in!");
        console.log("You have logged in!");
        // window.alert("You have logged in!");
        toast("You have logged in!")
        // history.replace('/dashboard');
        navigate('/all-newspaper');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{
      paddingTop:"10vh"
    }}>
      <Card className="cardcontainer">
        <Card.Header as="h5" className="text-center p-5">
          <strong><h1>USER LOGIN</h1></strong>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              size="lg"
              className="btn"
              type="submit"
              onClick={(e) => login(e)}
            >
              LOGIN
            </Button>
          </Form>
          <Button
            variant="warning"
            size="lg"
            className="btn signupbtn mt-2"
            type="submit"
          >
            <Link to="/signup">Register</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
