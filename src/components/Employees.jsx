import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Employee from "./Employee"
import { fetchEmployees } from "../reducers/employeeReducers"
import Timesheet from "./Timesheet"

const Employees = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])
  const employees = useSelector((state) => state.employees.employees)

  return (
    <div>
      {employees.map((employee) => {
        return (
          <Employee
            className="employeeBlock"
            key={employee.ID}
            employeeProp={employee}
          />
        )
      })}
      <Timesheet />
    </div>
  )
}

export default Employees
