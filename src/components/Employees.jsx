import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Employee from "./Employee"
import { fetchEmployees } from "../reducers/employeeReducers"
import Timesheet from "./Timesheet"

const Employees = () => {
  const dispatch = useDispatch()
  const [activeId, setActiveId] = useState()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])
  const employees = useSelector((state) => state.employees.employees)

  const handleClick = (id) => {
    console.log(id)
    setActiveId(id)
  }

  return (
    <div>
      {employees.map((employee) => {
        return (
          <div className="employeeBlock">
            <Employee
              key={employee.ID}
              employeeProp={employee}
              handleClickProp={handleClick}
            />
          </div>
        )
      })}
      <div className="timesheetList">
        {activeId ? <Timesheet employeeIdProp={activeId} /> : <div></div>}
      </div>
    </div>
  )
}

export default Employees
