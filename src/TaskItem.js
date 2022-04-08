import React from "react";

class TaskItem extends React.Component{

  constructor(props) {
      super(props);
      this.deleteTask = this.deleteTask.bind(this)
  }

  deleteTask() {
      this.props.deleteTask(this.props.todo);
  }

  render(){
    return(
      <li key={this.props.todo}>{this.props.todo} <button onClick={this.deleteTask} >delete</button></li>
    );
  }
}

export default TaskItem;
