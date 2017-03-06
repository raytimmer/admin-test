/**
 * Created by raytimmer on 2017/3/6.
 */
import axios from 'axios'

// let base = 'http://114.55.218.209:3000'

export const requestLogin = params => {
  return axios.post(`/webapi/users/login`, params).then(res => res.data)
}

// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }) }

// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }

// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }) }

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }) }

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }) }
