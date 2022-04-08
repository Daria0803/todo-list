import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.addTask}>
        <input type="text" name="keyword" placeholder="New task"/>
        <button>Add</button>
      </form>
    );
  }
}

export default Form;
