import request from '@/utils/request'

export function query(data) {
  return request({
    url: '/user/query',
    method: 'post',
    data
  })
}

export function queryMiniProgramUser(data) {
  return request({
    url: '/user/queryMiniProgramUser',
    method: 'post',
    data
  })
}

