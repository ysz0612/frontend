import React, {useContext} from 'react'
import TodoListChild from './TodoListChild'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
// import { TodoContext } from '../../no0_context/TodoContext'

const TodoList = () => {
    const {todoList} = useSelector(state=>state.todo);
  return (
    <ListBlock>
        {todoList?.map(item => (
            <TodoListChild
                key={item.id}
                item={item}
            />
        ))}
    </ListBlock>
  )
}

export default TodoList

const ListBlock = styled.div`
    display: flex;
    flex-direction: column;
`;