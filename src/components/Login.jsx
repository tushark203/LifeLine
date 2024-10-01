import React, { Fragment, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
// import { login } from "../../Actions/user";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import "../styles/Login.css";

const Login = () => {
  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    let response = await login(loginemail, loginpassword);
    if (response === true) {
      setAlertOpen(true);
      setSeverity("success");
      setAlertMessage("Logged in successfully !!");
    } else {
      setAlertOpen(true);
      setSeverity("error");
      setAlertMessage(response);
    }

    setTimeout(() => {
      setAlertOpen(false);
      setAlertMessage("");
      setSeverity("");
      if (response === true) {
        navigate("/projects");
      }
    }, 2000);
  };

  return (
    <Fragment>
      <div className="login-cont">
        {alertOpen ? (
          <div className="alertMessage">
            <Alert severity={severity}>{alertMessage}</Alert>
          </div>
        ) : (
          ""
        )}
        <div className="loghead">
          <p>Login</p>
        </div>
        <div className="login-box">
          <form className="loginForm" onSubmit={loginSubmit}>
            <div className="loginEmail">
              <EmailIcon className="login-svg" />
              <input
                type="email"
                placeholder="Email...."
                required
                value={loginemail}
                onChange={(e) => setloginemail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockIcon className="login-svg" />
              <input
                type="password"
                placeholder="Password...."
                required
                value={loginpassword}
                onChange={(e) => setloginpassword(e.target.value)}
              />
            </div>
            <div className="login-links">
              <Link className="login-link" to="/register">
                Don't have Account ?
              </Link>
              <Link className="login-link" to="/password/forgot">
                Forget Password ?
              </Link>
            </div>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
