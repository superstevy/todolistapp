import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/actions'

function TodoItem ({ todo }) {
  const [editable, setEditable] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [name, setName] = useState(todo.name)

  const dispatch = useDispatch()
  return (
    <div>
      <div className='row mx-2 align-items-center'>
        <div className='id'>
          {(name !== '') && `#${todo.id.length > 1 ? todo.id[2] : todo.id}`}
        </div>
        <div className='col'>
          {editable
            ? <input
                type='text'
                className='form-control'
                value={name}
                onChange={
                  (e) => setName(e.target.value)
                }
              />
            : <h4>{todo.name}</h4>}
        </div>
        {
          (name !== '') &&
            <button
              onClick={() => {
                dispatch(updateTodo(
                  {
                    ...todo,
                    name: name
                  }
                ))
                if (editable) {
                  setName(todo.name)
                }
                setEditable(!editable)
              }}
              className='btn btn-primary m-2'
            >{editable ? 'Update' : 'Edit Task'}
            </button>
        }
        {
          (name !== '') &&
            <button
              onClick={() => {
                if (completed) {
                  dispatch(deleteTodo(todo.id))
                }
                setCompleted(!completed)
              }}
              className='btn btn-danger m-2'
            >{completed ? 'Click Again To Delete' : 'Click When Done'}
            </button>
        }
        {/* {
        (name !== '') &&
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className='btn btn-danger m-2'
          >Delete
          </button>
        } */}
      </div>
    </div>
  )
}

export default TodoItem
