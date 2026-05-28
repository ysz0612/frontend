import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
// import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeTable = () => {
    const {emp} = useSelector(state=>state.emp);
  return (
    <>
        <table>
            <tr>
                {emp && Object.keys(emp).map(key => (
                    <th>{key}</th>
                ))}
            </tr>
            <tr>
                {emp && Object.values(emp).map(value => (
                    <td>{value}</td>
                ))}
            </tr>
        </table>
    </>
  )
}

export default EmployeeTable
