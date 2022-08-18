import axios from "axios"

const baseURL = `${process.env.REACT_APP_SP_URL}employees/`
const header = {
  "Content-Type": "application/json",
  authorization: `Bearer ${process.env.REACT_APP_SP_TOKEN}`,
}
// employees/{employeeID}/

const getAll = async () => {
  const response = await axios.get(baseURL, { headers: header })
  console.log(response.data)
  return response.data
}

export default { getAll }
