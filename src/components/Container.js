/** @format */

import React, { Fragment } from 'react'
import Search from './Search'
import TodoItems from './todos/TodoItems'

const Container = () => {
  return (
    <Fragment>
      <header>
        <ul>
          <li>
            <h1 className='title'>Todo</h1>
          </li>
          <li>
            <a href='!#'>
              <i class='fas fa-moon'></i>
            </a>
          </li>
        </ul>
      </header>
      <Search />
      <TodoItems />
    </Fragment>
  )
}

export default Container
