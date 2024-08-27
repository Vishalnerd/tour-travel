import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
   

    try {
      // Basic client-side validation
      if (!credentials.username || !credentials.email || !credentials.password) {
        setError("All fields are required.");
        return;
      }

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Registration failed. Please try again.");
        return;
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again later.");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="register img" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user icon" />
                </div>
                <h2>Register</h2>
                {error && <p className="error-message">{error}</p>}
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      value={credentials.username}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;