import React, { useState } from 'react'
import TodoTemplate from '../no2_conponents/todo/TodoTemplate'
import TodoInsert from '../no2_conponents/todo/TodoInsert'
import TodoList from '../no2_conponents/todo/TodoList'


const TodoPage = () => {


  return (
    <TodoTemplate>

    <TodoInsert/>

      <TodoList/>

    </TodoTemplate>
  )
}

export default TodoPage