import axios from 'axios'

let options = {}
if (process.server) {
  options.baseURL = 'http://api.zdmcloud.com'
}

export default axios.create(options)
