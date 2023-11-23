import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Alert, Container, Grid, CircularProgress } from '@mui/material';
import { useUserAuthentication } from "../authentication/UsersAuthenticationContext";
import Header from "./Header";

const SignUp = () => {
  const [mail, setMail] = useState("");
  const [err, setErr] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const { signUp } = useUserAuthentication();
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true); // Set loading to true on form submission
    try {
      await signUp(mail, pass);
      navigate("/");
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false); // Set loading to false after API call completion
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" className="mt-4">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <div className="p-4 box">
              <h2 className="mb-3">Khabar The News App Sign Up</h2>
              {err && <Alert severity="error">{err}</Alert>}
                <TextField
                  fullWidth
                  type="email"
                  label="Email address"
                  variant="outlined"
                  margin="normal"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <div className="d-grid gap-2">
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    disabled={loading}
                    onClick={handleSubmission}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
                  </Button>
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
              Already have an account? <Link to="/">Sign In</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
