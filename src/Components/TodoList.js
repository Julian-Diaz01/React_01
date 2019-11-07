import React, { Component } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };
  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //supposted tio update
          return {
            ...todo,
            //id: todo.id,
            // text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };
  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDelteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  removeAllTodosThatAreCompleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };
  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDelteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <button onClick={this.removeAllTodosThatAreCompleteTodo}>
              remove all complete todos
            </button>
          </div>
        ) : null}
        <div>

          <button
            onClick={() =>
              this.setState( state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            toggle all complete {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
