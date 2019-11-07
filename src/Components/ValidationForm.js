import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValidationForm extends React.Component {
  state = initialState;
  handleChange = event => {
    //  console.log(fieldname);
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
     let  passwordError= "";

    if (!this.state.name) {
      nameError = "name can not be blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (this.state.password.length < 8) {
      passwordError = "Invalid password"; 
    }    
    if (emailError || nameError || passwordError ) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      // tclear form
      this.setState(initialState);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            checked={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="Submit">Submit</button>
      </form>
    );
  }
}
