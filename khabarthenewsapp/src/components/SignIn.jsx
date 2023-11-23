import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Paper, Alert, TextField, Button, Container, Grid, CircularProgress } from "@mui/material";
import GoogleButton from "react-google-button";
import { useUserAuthentication } from "../authentication/UsersAuthenticationContext";
import Header from "./Header";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const { singIn, gSignIn } = useUserAuthentication();
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Set loading to true on login click
    try {
      await singIn(email, password);
      navigate("/main");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Set loading to false after login attempt
    }
  };

  const handleGoogleLogIn = async (e) => {
    e.preventDefault();
    try {
      await gSignIn();
      navigate("/main");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="md">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
              <Typography variant="h4" mb={3}>
                Khabar The News App Login
              </Typography>

              {error && <Alert severity="error">{error}</Alert>}
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="button"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleSubmission}
                disabled={loading} // Disable the button when loading
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Log In"}
              </Button>
              <hr />
              <div>
                <GoogleButton
                  type="dark"
                  onClick={handleGoogleLogIn}
                  style={{ margin: "auto", width: "100%" }}
                />
              </div>
            </Paper>
            <div sx={{ p: 4, mt: 3, textAlign: "center" }}>
              <div style={{ margin: "auto", width: "100%", textAlign: "center" }}>
                Create an Account? <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignIn;
