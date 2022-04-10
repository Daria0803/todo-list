import React from "react";
import './TaskItem.css';

class TaskItem extends React.Component{

  constructor(props) {
      super(props);

      this.deleteTask = this.deleteTask.bind(this);
      this.changeState = this.changeState.bind(this);
  }

  deleteTask() {
      this.props.deleteTask(this.props.todo);
  }

  changeState() {
      this.props.changeState(this.props.todo);
  }


  render(){
    return(
      <p className="task-container" key={this.props.todo}>
        <label style={{ textDecoration: this.props.isdone ? "line" : undefined }}>
          <input type="checkbox"  checked={this.props.isdone} onChange={this.changeState}/>
        </label>
        <i>{this.props.todo}</i>
        <button onClick={this.deleteTask} >Delete</button>
      </p>
    );
  }
}

export default TaskItem;
