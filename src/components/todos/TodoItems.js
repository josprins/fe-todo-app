/** @format */

import React from 'react'

const TodoItems = () => {
  return (
    <div className='todos'>
      <ul className='todos-list'>
        <li className='todo-item'>
          <input type='checkbox' name='checkbox' id='checkbox' />
          Todo 1 <a href='!#'>X</a>
        </li>
        <li className='todo-item'>
          <input type='checkbox' name='checkbox' id='checkbox' />
          Todo 1 <a href='!#'>X</a>
        </li>
        <li className='todo-item'>
          <input type='checkbox' name='checkbox' id='checkbox' />
          Todo 1 <a href='!#'>X</a>
        </li>
        <li className='todo-item'>
          <input type='checkbox' name='checkbox' id='checkbox' />
          Todo 1 <a href='!#'>X</a>
        </li>
        <li className='todo-item'>
          <input type='checkbox' name='checkbox' id='checkbox' />
          Todo 1 <a href='!#'>X</a>
        </li>
      </ul>
    </div>
  )
}

export default TodoItems
