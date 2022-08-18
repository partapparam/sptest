import React, { useEffect } from "react"
import axios from "axios"

const url = `${process.env.REACT_APP_SP_URL}schedules/?Staff.ID=48`

const Timesheet = () => {
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${process.env.REACT_APP_SP_TOKEN}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }, [])

  return <div></div>
}

export default Timesheet
