import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Employee from "./Employee"
import { initializeEmployees } from "../reducers/employeeReducers"

const Employees = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeEmployees())
  }, [dispatch])
  const employees = useSelector((state) => state.employee[0])

  return (
    <div>
      {(employees || []).map((employee) => {
        return <Employee employeeProp={employee} />
      })}
    </div>
  )
}

export default Employees
