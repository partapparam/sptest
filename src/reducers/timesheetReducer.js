import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import timesheetService from "../services/timesheet"

const timesheetSlice = createSlice({
  name: "timesheets",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTimesheets.pending, (state, action) => {
        console.log("pending state")
      })
      .addCase(fetchTimesheets.fulfilled, (state, action) => {
        console.log("filled")
        return action.payload
      })
  },
})

export const fetchTimesheets = createAsyncThunk(
  "timesheets/fetchTimesheets",
  async (params) => {
    const data = await timesheetService.getTimesheetByEmployee(params)
    console.log(data)
    return data
  }
)

export default timesheetSlice.reducer
