import React, { useState } from 'react'
// import { EmployeeContext } from '../../no0_context/EmployeeContext'
import { useDispatch } from 'react-redux'
import { register } from '../../no3_store/slice/employeeSlice'

const initialEmp = {
  id : '', name : '',email : '', job: '',pay : ''
}


const initialEmps = [
  {id : "1", name: "John", email: "John4454@example.com", job : "frontend", pay : 600 },
  {id : "2", name: "Peter", email: "Peter4454@example.com", job : "backend", pay : 601 },
  {id : "3", name: "Susan", email: "Susan4454@example.com", job : "db", pay : 602 },
  {id : "4", name: "sue", email: "Sue4454@example.com", job : "ai", pay : 603 }
]

const initialState = {
  empTable: initialEmps,
  emp: initialEmp
}

/*const reducer = (state, action) =>{
  switch(action.type){
    case "change" : 
      const {name, value} = event.target;
      return
        {
          ...state,
          emp: {...state.emp, [name] : value  }
        }
  }
}*/

  const EmployeeRegister = () => {
    const dispatch = useDispatch();
    const [emp,setEmp] = useState(initialEmp);
    const handleChange = (event) =>{
      const {name,value} = event.target;
        setEmp(prev => (
        {...prev, [name] : value}
      ))
    }

    const handleSubmmit = (event) =>{
     event.preventDefault();
    
    const newId = Date.now().toString();

    dispatch(register({newId, emp}))

    setEmp(initialEmp)
  }

  

 return (
  <form className="employee-form" onSubmit={handleSubmmit}>
    <div>
      <input
        type='text'
        name='name'
        value={emp.name}
        onChange={handleChange}
        placeholder='이름'
      />
    </div>
    <div>
      <input
        type='email'
        name='email'
        value={emp.email}
        onChange={handleChange}
        placeholder='이메일'
      />
    </div>
    <div>
      <input
        type='text'
        name='job'
        value={emp.job}
        onChange={handleChange}
        placeholder='직업'
      />
    </div>
    <div>
      <input
        type='number'
        name='pay'
        value={emp.pay}
        onChange={handleChange}
        placeholder='월급'
      />
    </div>
    <button>등록</button>
  </form>
)
}

export default EmployeeRegister
