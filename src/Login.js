import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link } from "@material-ui/core";
import { withRouter } from "./utils";
const axios = require("axios");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios
      .post("http://localhost:2000/login", {
        username: this.state.username,
        password: pwd
      })
      .then((res) => {
        const isAdmin = res.data.isAdmin;

        if (isAdmin) {
          // Admin login successful
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.id);
          this.props.navigate("/adminDashboard");
          console.log(isAdmin);
        } else {
          // Non-admin login successful
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.id);
          this.props.navigate("/dashboard");
        }
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data &&
          err.response.data.errorMessage
        ) {
          swal({
            text: err.response.data.errorMessage,
            icon: "error",
            type: "error"
          });
        }
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "4px",
            boxShadow: "2px 10px 20px rgba(0, 0, 0, 0.3)"
          }}
        >
          <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Login</h1>
          <TextField
            
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
            inputProps = {
              {
                style: {
                  fontSize: "16px"
                }
              }
            }
            style={{ fontSize: "16px", width: "70%", marginBottom: "20px" }}
          />
          <TextField
            
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
            inputProps = {
              {
                style: {
                  fontSize: "16px"
                }
              }
            }
            style={{ fontSize: "15px", width: "70%", marginBottom: "20px" }}
          />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="large"
            disabled={this.state.username === "" && this.state.password === ""}
            onClick={this.login}
            style={{
              fontSize: "17px",
              padding: "12px 12px",
              width: "40%",
              marginTop:"10px",
              marginBottom: "20px"
            }}
          >
            Login
            
          </Button>
          <br/>
          <Link
            component="button"
            style={{
              fontFamily: "inherit",
              fontSize: "20px",
              color: "#1976d2"
            }}
            onClick={() => {
              this.props.navigate("/register");
            }}
          >
            REGISTER
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
