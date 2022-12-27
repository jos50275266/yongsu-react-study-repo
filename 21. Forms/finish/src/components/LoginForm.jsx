import React from "react";
import Form from "react-bootstrap/Form";
import Joi from "joi";
import FormComp from "./common/FormComp";

class LoginForm extends FormComp {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = () => {
    // Call the server
    console.log("Submitted!");
  };

  render() {
    console.log(this.state);

    return (
      <Form className="container" onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username", "formBasicUsername", "text")}
        {this.renderInput(
          "password",
          "Password",
          "formBasicPassword",
          "password"
        )}
        {this.renderButton("Login")}
      </Form>
    );
  }
}

export default LoginForm;
