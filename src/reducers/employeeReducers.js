import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import employeeService from "../services/employee"

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const employeeList = await employeeService.getAll()
    return employeeList
  }
)

const employeesSlice = createSlice({
  name: "employees",
  initialState: { employees: [], status: "" },
  reducers: {
    // setState(state, action) {
    //   state.employees = [...action.payload]
    //   Immer lets us update state in two ways: either mutating the existing state value, or returning a new result.
    //   return action.payload will replace the existing state completely with what we return
  },
  extraReducers(builder) {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.status = "success"
      state.employees = action.payload
    })
  },
})

// exports the action appendEmployee
// export const { setState } = employeesSlice.actions

// thunk that we can call to perform async action
// export const initializeEmployees = () => {
//   return async (dispatch, getState) => {
//     const allEmployees = await employeeService.getAll()
//     dispatch(setState(allEmployees))
//   }
// }

export default employeesSlice.reducer
