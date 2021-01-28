import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function query(data) {
  return request({
    url: '/user/query',
    method: 'post',
    data
  })
}

