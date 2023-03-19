import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://80.90.189.118:8070/',
})

export default instance
