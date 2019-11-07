
import React,{Component} from "react";
import logo from"../logo.svg";

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
          <div>{this.props.myFunc(10, 12)}</div>
        </header>
      );
    }
  }
  export default Header;