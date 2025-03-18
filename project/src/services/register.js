import axios from 'axios'

export const register = async (data) => {
  return await axios.post("http://127.0.0.1:8000/api/registro/", data)
}
