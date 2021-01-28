import request from '@/utils/request'

export function queryTodayOrder(data) {
  return request({
    url: '/program/order/queryTodayOrder',
    method: 'post',
    data
  })
}

export function queryAllOrder(data) {
  return request({
    url: '/program/order/queryAllOrder',
    method: 'post',
    data
  })
}

export function obtainFood(data) {
  return request({
    url: '/program/order/obtainFood',
    method: 'post',
    data
  })
}

