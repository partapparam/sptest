import { configureStore } from "@reduxjs/toolkit"
import employeeReducers from "./reducers/employeeReducers"

const reducer = {
  employee: employeeReducers,
}

export const store = configureStore({
  reducer,
})
