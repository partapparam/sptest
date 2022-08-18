import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Employee from "./Employee"
import { fetchEmployees } from "../reducers/employeeReducers"
import Timesheet from "./Timesheet"

const Employees = () => {
  const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(fetchEmployees())
  //   }, [dispatch])
  //   const employees = useSelector((state) => state.employees.employees)
  //   const requestStatus = useSelector((state) => state.requestStatus)

  return (
    <div>
      {/* {(employees || []).map((employee) => {
        return <Employee key={employee.ID} employeeProp={employee} />
      })} */}
      <Timesheet />
    </div>
  )
}

export default Employees
