import React from "react";

export default class MyForm extends React.Component {
  state = {
    name: "",
    Pet: "",
    rememberMe: true,
    title: "Miss."
  };
  handleChange = event => {
    //  console.log(fieldname);
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // this.setState({rememberMe: Event.target.checked});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <textarea
          name="Pet"
          value={this.state.Pet}
          onChange={this.handleChange}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Ms.</option>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="Submit">Submit</button>
      </form>
    );
  }
}
