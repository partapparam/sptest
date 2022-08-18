import React, { useEffect } from "react"
import { fetchTimesheets } from "../reducers/timesheetReducer"
import { useDispatch, useSelector } from "react-redux"

const Timesheet = () => {
  const dispatch = useDispatch()
  const id = 48
  const start = "2022-08-10"
  const end = "2022-08-18"

  useEffect(() => {
    dispatch(fetchTimesheets({ id, start, end }))
  }, [dispatch])

  const timesheets = useSelector((state) => state.timesheet)

  return (
    <div>
      {timesheets.map((block) => {
        return (
          <div className="timeBlock">
            <p>{block.Date}</p>
            <p>{block.ScheduleType}</p>
            <p>{block.StartTime}</p>
            <p>{block.EndTime}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default Timesheet
