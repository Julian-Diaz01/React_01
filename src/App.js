import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Body2, Body } from "./Components/Body";
// import Header from "./Components/Header";
import Counter from "./Components/Counter";
// import ImageSlider from "./Components/imageSlider";
// import MyForm from "./Components/MyForm";
// import ValidationForm from "./Components/ValidationForm";
// import FetchRandomUser from "./Components/FetchRandomUser";
import TodoList from "./Components/TodoList"
import TodoForm from "./Components/TodoForm"

class App extends Component {
  state = {
 
  };

  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

export default App;

/* state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };

  add(a, b) {
    return a * b;
  }
  render() {
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Counter" });
            }}
          >
            Show Counter
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div>
          <div className={this.state.visible ? "visible" : "hidden"}>
            <Counter />
          </div>
          <button
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            Hide
          </button>
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Header" });
            }}
          >
            Show header
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Header") {
      return (
        <div>
          <Header title={"Hello"} myFunc={this.add} />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "ImageSlider" });
            }}
          >
            Show Slider
          </button>
        </div>
      );
    }
    return null;

    
        //   title={"Hello"}
        //   num={7}
        //   myArr={[10, 2, 3]}
        //   myFunc={this.add}
        //   myObj={{
        //     a: 5,
        //     b: 6
        //   }}
        // />
        // <Body2 />
        // <Body myFunc={this.add} text="i am cool" text2="i am cool2" />
        // <Body myFunc={this.add} text="i am" text2="i cool2" />
        // <Counter initialCount={0}/>
        // <Counter initialCount={10}/> 
    
  }*/
