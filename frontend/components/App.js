import React from 'react'
import Form from "./Form"
import TodoList from "./TodoList"

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }


  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    })
  }

  handleAdd = (task) => {

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return todo.completed === false
      })
    }) 
  }

  render() {
    const { todos } = this.state
    
    return (
      <div>
        <h1>To Do's</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
