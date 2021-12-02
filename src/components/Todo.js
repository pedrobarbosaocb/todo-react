import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit, TiPlus } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  
  const [subTodo, setSubTodo] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(subTodo.id, value)
    setSubTodo({
      id: null,
      value: ''
    })
  }

  const submitUpdate2 = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (subTodo.id) {
    return <TodoForm subTodo={subTodo} onSubmit={submitUpdate} />
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate2} />
  }

  if (todos) {
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
          <a target="_blank" href="https://www.google.com" class="GFG">
            <TiPlus
              className="subtodo-icon"
            />
          </a>
        </div>
      </div>
    ))
  }
  return <></>
}

export default Todo
