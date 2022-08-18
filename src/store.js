import { configureStore } from "@reduxjs/toolkit"
import employeesReducers from "./reducers/employeeReducers"
import timesheetReducer from "./reducers/timesheetReducer"

const reducer = {
  employees: employeesReducers,
  timesheet: timesheetReducer,
}

export const store = configureStore({
  reducer,
})
