import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    id:null, name:'', email:'', job:'', pay:null
}

const Register = ({setInfos}) => {
    const navigate = useNavigate();
    const [info, setInfo] = useState(initialState)
    const handleChange = () =>{
        const{name, value} = event.target;
        setInfo((prev)=>(
            {...prev, [name]: value}
        ))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setInfos((prev) => (
            [...prev, info]
        ))
    }
  return (
      <form onSubmit={handleSubmit}>
        <div>
            <label>id</label>
                <input
                    type="number"
                    name= "id"
                    value= {info.id}
                    onChange={handleChange}
                />
        </div>
        <div>
            <label>이름</label>
                <input 
                    type="text"
                    name= "name"
                    value= {info.name}
                    onChange={handleChange}
                />
        </div>
        <div>
            <label>이메일</label>
                <input 
                    type="email"
                    name= "email"
                    value= {info.email}
                    onChange={handleChange}
                />  
        </div>
        <div>
            <label>직업</label>
                <input 
                    type="text"
                    name= "job"
                    value= {info.job}
                    onChange={handleChange}
                />
        </div>
        <div>
            <label>급여</label>
                <input 
                    type="number"
                    name= "pay"
                    value= {info.pay}
                    onChange={handleChange}
                />
        </div>
        <button>제출</button>
       
      </form>
    
  )
}


export default Register
