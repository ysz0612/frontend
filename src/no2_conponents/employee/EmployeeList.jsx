import React, { useContext } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext';

const EmployeeList = () => {
    const {state, dispatch} = useContext(EmployeeContext);
  const {empTable, selectedId} = state;

  const handleClick = (id) => {
   dispatch({type: "select", payload: id})
  }

  return (
    <div className="employee-list">
      {empTable?.map(item => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{
            background: selectedId === item.id ? "#2563eb" : undefined,
            color: selectedId === item.id ? "white" : undefined
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default EmployeeList