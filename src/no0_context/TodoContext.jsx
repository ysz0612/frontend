import React, { createContext, useReducer } from 'react'

const initialState = {
  todoList: [
    {id: 1, subject: "HTML 공부", checked: true},
    {id: 2, subject: "CSS 공부", checked: true},
    {id: 3, subject: "React 공부", checked: false},
    {id: 4, subject: "Python 공부", checked: false},
  ],

  todoObj: {
    id: "",
    subject: "",
    checked: false
  }
}

export const TodoContext = createContext()

const reducer = (state, action) => {

    switch(action.type){

        // input 값 변경
        case "register":
            return {
                ...state,
                todoObj: {
                    ...state.todoObj,
                    [action.name]: action.value
                }}
            case "change":
            return {
                todoList: [
                    ...state.todoList,

                    {
                        ...state.todoObj,

                        id:
                        state.todoList.length > 0
                        ? Math.max(...state.todoList.map(item => item.id)) + 1
                        : 1
                    }
                ],
            
            }

        // 체크 토글
        case "toggle":

            return {
                ...state,

                todoList: state.todoList.map(todo =>
                    todo.id === action.id
                    ? {...todo, checked: !todo.checked}
                    : todo
                )
            }

        // 수정
        case "update":

            return {
                ...state,

                todoList: state.todoList.map(todo =>
                    todo.id === action.id
                    ? {...todo, subject: action.subject}
                    : todo
                )
            }

        // 삭제
        case "delete":

            return {
                ...state,

                todoList: state.todoList.filter(todo =>
                    todo.id !== action.payload
                )
            }

        default:
            return state
    }
}

const TodoProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider