import request from '@/utils/request'

export function query(data) {
  return request({
    url: '/program/food/query',
    method: 'post',
    data
  })
}

export function deleteFood(data) {
  return request({
    url: '/program/food/delete',
    method: 'post',
    data
  })
}

export function updateFood(data) {
  return request({
    url: '/program/food/update',
    method: 'post',
    data
  })
}

export function insertFood(data) {
  return request({
    url: '/program/food/insert',
    method: 'post',
    data
  })
}

