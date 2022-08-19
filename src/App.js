import React, { useEffect } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import { initializeEmployees } from "./reducers/employeeReducers"
import Employees from "./components/Employees"

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(initializeEmployees())
  // }, [dispatch])

  return (
    <div className="App">
      <h2>simPRO Employees</h2>
      <div className="employeeList">
        <Employees />
      </div>
    </div>
  )
}

export default App
