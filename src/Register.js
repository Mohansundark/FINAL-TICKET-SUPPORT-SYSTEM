import React, { Component } from "react";
import { Button, TextField, Link } from "@material-ui/core";
import { withRouter } from "./utils";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm_password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = async () => {
    try {
      const response = await axios.post("http://localhost:2000/register", {
        username: this.state.username,
        password: this.state.password,
      });

      toast.success(response.data.title);
      this.props.navigate("/login");
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred. Please try again later.";

      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        errorMessage = error.response.data.errorMessage;
      }

      toast.error(errorMessage);
    }
  };


  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "4px",
            boxShadow: "2px 10px 20px rgba(0, 0, 0, 0.3)",
            width:'30%'
          }}
        >

        <h1 style={{ fontSize: "35px", marginBottom: "30px" }}>Register</h1>
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
          />
          <br />
          <br />
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
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
            inputProps = {
              {
                style: {
                  fontSize: "16px"
                }
              }
            }
          />
          <br />
          <br />
          <br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username === "" || this.state.password === ""}
            onClick={this.register}
            style={{fontSize:'20px'}}
          >
            Register
          </Button>
          <br />{" "}
          <br />
          
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            component="button"
            style={{ fontFamily: "inherit", fontSize: '21px' }}
            onClick={() => {
              this.props.navigate("/login");
            }}
          >
            LOGIN
          </Link>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}

export default withRouter(Register);
