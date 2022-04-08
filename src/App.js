import React, { Component } from "react";
import Form from "./Form";
import './App.css';

const test = () => <p>Hello</p>




class App extends Component {

  constructor(props) {
      super(props);

      if (typeof localStorage['tasks'] !== 'undefined' && localStorage['tasks'] !== null){

        this.state = {
          list: JSON.parse(localStorage.getItem('tasks')),
          inputValue: ''
        }

      }else {
        this.state = {
          list: [],
          inputValue: ''
        };
      }
      console.log(this.state.list);

      this.addTask = this.addTask.bind(this);
  }



  addTask = async (e) => {


    e.preventDefault();
    var newTask = e.target.elements.keyword.value;
    var todos = this.state.list;
    console.log(newTask);
    todos.push(newTask);
    console.log(this.state.list);
    localStorage.setItem('tasks', JSON.stringify(todos));


    this.setState({
      inputValue: newTask,
      list: todos
    });
  }



  render(){
    //console.log(JSON.parse(localStorage.getItem('todos')));
    var listmap = [];
    if (this.state.list){
      listmap = this.state.list.map(task => (<li key={task}>{task}</li>));
    }

    return (

      <div className="App">

        <h1>Todo</h1>

        <Form addTask={this.addTask} />
        <div>{listmap}</div>

      </div>
    );
  }


}

export default App;
