import { configureStore } from "@reduxjs/toolkit"
import employeesReducers from "./reducers/employeeReducers"

const reducer = {
  employees: employeesReducers,
}

export const store = configureStore({
  reducer,
})
