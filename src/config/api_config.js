import axios from 'axios'
import Store from '../store'

export const authServiceBaseUrl = 'http://127.0.0.1:8000/'
export const BookServiceBaseUrl = 'http://127.0.0.2:8000/'

export default {
  getData (baseUrl, uri, params = {}) {
    // const filters = setFilters()
    return this.execute(baseUrl, 'get', uri, {}, params)
  },
  postData (baseUrl, uri, data) {
    return this.execute(baseUrl, 'post', uri, data)
  },
  putData (baseUrl, uri, data) {
    return this.execute(baseUrl, 'put', uri, data)
  },
  deleteData (baseUrl, uri) {
    return this.execute(baseUrl, 'delete', uri)
  }
}
