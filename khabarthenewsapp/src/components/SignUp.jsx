import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuthentication } from "../authentication/UsersAuthenticationContext";

const SignUp = () => {
  const [mail, setMail] = useState("");
  const [err, setErr] = useState("");
  const [pass, setPass] = useState("");
  const { signUp } = useUserAuthentication();
  let navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signUp(mail, pass);
      navigate("/");
    } catch (err) {
      setErr(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Khabar The News App Signup</h2>
        
        {err && <Alert variant="danger">{err}</Alert>}

        <Form onSubmit = {handleSubmission}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Sign In</Link>
      </div>
    </>
  );
};

export default SignUp;