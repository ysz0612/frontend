import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext';


const EmployeeUpdate = () => {
  const {state, dispatch} = useContext(EmployeeContext)
  const {emp} = state;
  const [ newemp, setNewEmp] = useState(emp);


  useEffect(()=>{
    emp &&
    setNewEmp(emp)
  },[emp])  

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setNewEmp(prev => (
      {...prev, [name] : value}
      ))
    }
    
  const handleSubmmit = (event) =>{
      event.preventDefault();
      dispatch({type: "update", payload: newemp })
    }
    
      
    
      return (
  <form className="employee-form" onSubmit={handleSubmmit}>
    <div>
      <input
        type='text'
        name='name'
        value={newemp.name}
        onChange={handleChange}
        placeholder='이름'
      />
    </div>
    <div>
      <input
        type='email'
        name='email'
        value={newemp.email}
        onChange={handleChange}
        placeholder='이메일'
      />
    </div>
    <div>
      <input
        type='text'
        name='job'
        value={newemp.job}
        onChange={handleChange}
        placeholder='직업'
      />
    </div>
    <div>
      <input
        type='number'
        name='pay'
        value={newemp.pay}
        onChange={handleChange}
        placeholder='월급'
      />
    </div>
    <button>수정</button>
  </form>
)
    }

export default EmployeeUpdate