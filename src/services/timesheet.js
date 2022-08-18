import axios from "axios"

const headers = {
  "Content-Type": "application/json",
  authorization: `Bearer ${process.env.REACT_APP_SP_TOKEN}`,
}
const baseUrl = `${process.env.REACT_APP_SP_URL}/employees`

const getTimesheetByEmployee = async (params) => {
  const { id, start, end } = params
  const response = await axios.get(
    `${baseUrl}/${id}/timesheets/?StartDate=${start}&EndDate=${end}`,
    { headers: headers }
  )
  console.log(response.data)
  return response.data
}

export default { getTimesheetByEmployee }
