import './App.css'
import React from 'react'
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="todo-app">
      
      <TodoList className="test" />

      <a href="#" className="logo">
        <text id="pomodLOGO">POMOD</text>
        <text id="orcLOGO">ORC</text>
      </a>

    </div>
  )
}

export default App
