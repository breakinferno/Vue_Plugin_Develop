import path from 'path'
import axios from 'axios'

function apiPrefix (api) {
  return path.join('api', api)
}

const GET_COMMENTS_API = 'comments'
const ADD_COMMENT_API = 'comments'

export const getComments = params => {
  return axios.get(`${apiPrefix(GET_COMMENTS_API)}`, {
    params: params
  })
}

export const addComment = params => {
  return axios.post(`${apiPrefix(ADD_COMMENT_API)}`, params)
}

export default {
  getComments,
  addComment
}
