import { createSlice } from "@reduxjs/toolkit"
import employeeService from "../services/employee"

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    appendEmployees(state, action) {
      //   console.log(action.payload)
      // error here --- this will keep adding employee [] to the state
      state.push(action.payload)
      //   console.log(state.employees)
    },
  },
})

// exports the action appendEmployee
export const { appendEmployees } = employeeSlice.actions

// thunk that we can call to perform async action
export const initializeEmployees = () => {
  return async (dispatch, getState) => {
    console.log(getState())
    const allEmployees = await employeeService.getAll()
    dispatch(appendEmployees(allEmployees))
    console.log("satte after", getState())
  }
}

export default employeeSlice.reducer
