import React, { Component } from "react";
import Form from "./Form";
import TaskItem from "./TaskItem";
import './App.css';


class App extends Component {

  constructor(props) {
      super(props);
      if (typeof localStorage['Tasks'] !== 'undefined' && localStorage['Tasks'] !== null){

        this.state = {
          obj: JSON.parse(localStorage.getItem('Tasks')),
          inputValue: ''
        }

      }else {
        this.state = {
          obj: {},
          inputValue: ''
        };
      }

      this.addTask = this.addTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.changeState = this.changeState.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }


  addTask = async (e) => {

    e.preventDefault();
    var newTask = e.target.elements.keyword.value;
    var todos = this.state.obj;
    todos[newTask] = false;
    localStorage.setItem('Tasks', JSON.stringify(todos));

    this.setState({
      inputValue: newTask,
      obj: todos
    });
  }

  deleteTask(todo){
    var todos = this.state.obj;
    //todos.splice(todos.indexOf(todo), 1);
    delete todos[todo];
    localStorage.setItem('Tasks', JSON.stringify(todos));


    this.setState({
      obj: todos
    });
  }

  changeState(todo) {
    var todos = this.state.obj;
    todos[todo] = !todos[todo];
    localStorage.setItem('Tasks', JSON.stringify(todos));
    this.setState({
      obj: todos
    });

    console.log(todos)
  }

  handleChange(event) {
      console.log(event.target.checked);
  }

  render(){
    var listmap = [];
    var object = this.state.obj;
    if (this.state.obj){
      var keys = Object.keys(this.state.obj);
      listmap = keys.map(task => (
        <TaskItem key={task} isdone={object[task]} todo={task} deleteTask={this.deleteTask} changeState={this.changeState}/>
      ));
    }

    return (
      <div className="wrapper">
        <div className="flex-container">
          <h1> To do </h1>
          <Form addTask={this.addTask} />
          <div className="tasklist">{listmap}</div>
        </div>
      </div>
    );
  }


}

export default App;
