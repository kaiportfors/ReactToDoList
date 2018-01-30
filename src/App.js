import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todo from './Todo';
import './App.css';

function searchingFor(term){
  return function(x){
    return x.toLowerCase().includes(term.toLowerCase());
  }
}

class App extends Component {
  constructor(){
    super()

    this.state = {
      todos: [],
      term: '',
    }

    this.searchHandler = this.searchHandler.bind(this);

    this.todoInput= ""
  }

  searchHandler(event){
    this.setState({ term: event.target.value})
  }

  addTodo(){
    let todoValue = this.todoInput.value

    let newTodos = this.state.todos
    newTodos.push(todoValue)

    this.setState({
      todos: newTodos
    })

    //Reset Value
    this.todoInput.value = ""

    this.todoInput.focus()
  }

  removeTodo(id){
    let todos = this.state.todos.filter((todo,index) => {
      return id !== index
    })

    this.setState({
      todos:todos
    })
  }

  render() {

    return (
      <div>
        <h1> Kai's React TodoList </h1>
        <form><input type="text" class = "input1" placeholder="Filter" onChange={this.searchHandler}/></form>
        <ul>
           {this.state.todos.filter((searchingFor(this.state.term))).map((todo, index) => {
             return (<Todo id={index} key={index} todo = {todo} onRemove={() => this.removeTodo(index)}/>)
           })}
        </ul>
        <input type="text" class = "input2" placeholder ="Enter todo" ref={(input) => this.todoInput = input}/>
        <button onClick={this.addTodo.bind(this)}>Add</button>
      </div>
    );
  }
}

export default App;
