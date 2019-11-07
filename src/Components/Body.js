import React from "react";

export const Body = props => (
    <div>
      <p className="App-intro">{props.text}</p>
      <p className="App-intro">{props.text2}</p>
      <p className="App-intro">{props.myFunc(1, 2)}</p>
    </div>
  );


  export const Body2 = () => (

<div>Hii :)</div>
  );