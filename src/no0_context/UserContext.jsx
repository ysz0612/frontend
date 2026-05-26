import React, { createContext, useReducer } from 'react'

const initialUsers = [
  {id: 1, username: "John", password: "1111"},
  {id: 1, username: "Peter", password: "2222"},
  {id: 1, username: "John", password: "3333"},
  {id: 1, username: "John", password: "4444"}
]

export const UserContext = createContext();

const initialState = {
  users: initialUsers,
  username: "",
  isLogin: false
}

const reducer = (state, action) => {
    switch(action.type){
      case "login":
        return{
          ...state,
          isLogin: true,
          username: action.payload
        }
      case "register":
        return{
          ...state,
          users: [
            ...state.users,
            {id: action.payload.id,
              username: action.payload.username,
              password: action.payload,password
            }
          ]
        }
      case "logout":
        return{
          ...state,
          islogin: false,
          username:""
        }
        default:
          return state;
    }
}


const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
