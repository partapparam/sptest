import React from "react"

const Employee = ({ employeeProp }) => {
  return (
    <div>
      <li key={employeeProp.ID}>{employeeProp.Name}</li>
    </div>
  )
}

export default Employee
