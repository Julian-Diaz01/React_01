import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
        "https://images.unsplash.com/photo-1532264523420-881a47db012d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1460648304944-4883b5cfcee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1544713061-21cd773e9130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    ],
    idx: 0
  };

  handleNext = ()=> {
this.setState({
idx: this.state.idx +1

});

  }
  render() {
    return <div>
      <button 
      onClick={() => {
        this.setState({
          idx:this.state.idx - 1
        });
        
        
        }}>previous
        
        
        </button>
      <img 
      style={{
        width:100,
        height:100
      }}
      src={this.state.images[this.state.idx]}/>
      <button onClick={this.handleNext}>Next</button>
    </div>;
  }
}
