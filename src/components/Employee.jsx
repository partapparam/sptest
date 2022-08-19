import React from "react"

const Employee = ({ employeeProp, handleClickProp }) => {
  return (
    <div>
      <li
        onClick={() => handleClickProp(employeeProp.ID)}
        key={employeeProp.ID}
      >
        {employeeProp.Name}
      </li>
    </div>
  )
}

export default Employee
