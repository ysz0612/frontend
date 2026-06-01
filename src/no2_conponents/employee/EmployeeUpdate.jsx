import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { employeePutSlice } from '../../no3_store/slice/employeeSlice';
// import { EmployeeContext } from '../../no0_context/EmployeeContext';


const EmployeeUpdate = () => {
  const {emp} = useSelector(state=>state.emp);
  const dispatch = useDispatch();
  const [ newEmp, setNewEmp] = useState(emp);
  useEffect(()=>{
    // console.log(emp)
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
      dispatch(employeePutSlice(newEmp))
    }
    
      
    
      return (
  <form className="employee-form" onSubmit={handleSubmmit}>
    <div>
      <input
        type='text'
        name='name'
        value={newEmp.name}
        onChange={handleChange}
        placeholder='이름'
      />
    </div>
    <div>
      <input
        type='email'
        name='email'
        value={newEmp.email}
        onChange={handleChange}
        placeholder='이메일'
      />
    </div>
    <div>
      <input
        type='text'
        name='job'
        value={newEmp.job}
        onChange={handleChange}
        placeholder='직업'
      />
    </div>
    <div>
      <input
        type='number'
        name='pay'
        value={newEmp.pay}
        onChange={handleChange}
        placeholder='월급'
      />
    </div>
    <button>수정</button>
  </form>
)
    }

export default EmployeeUpdate