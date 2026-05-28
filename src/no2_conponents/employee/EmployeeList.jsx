import React from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../no3_store/slice/employeeSlice';

const EmployeeList = () => {
  const {empTable, selectedId} = useSelector(state=>state.emp);
  const dispatch = useDispatch();



  return (
    <div className="employee-list">
      {empTable[0] && empTable.map(item => (
        <button
          key={item.id}
          onClick={() => dispatch(select(item.id))}
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