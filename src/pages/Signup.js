import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { registerUser } from "../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure(); 
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    console.log(username, password, cpassword);
    if (password !== cpassword) {
      // return presentToast('Password do not match.');
      console.log("Password do not match.");
      // window.alert("Password do not match.");
      toast('Password do not match.');
      return;
    }
    if (username.trim() === "" || password.trim() === "") {
      // return presentToast('Username and password are required');
      console.log("Username and password are required");
      // window.alert("Username and password are required");
      toast('Username and password are required');
      return;
    }
    const res = await registerUser(username, password);
    if (res) {
      console.log("Registration successful!");
      // window.alert("Registration successful!");
      toast('Registration successful!')
    }
    // history.push({ pathname: "/home" });
  }

  return (
    <div style={{
      paddingTop:"10vh"
    }}>
      <Card className="cardcontainer">
        <Card.Header as="h5" className="text-center p-5">
          <strong><h1>REGISTER</h1></strong>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
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
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                onChange={(event) => {
                  setCPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              size="lg"
              className="btn"
              type="submit"
              onClick={(e) => register(e)}
            >
              SIGN-UP
            </Button>
            <p className="text-center mt-3">
              Already have and account? <Link to="/login">Login..</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
