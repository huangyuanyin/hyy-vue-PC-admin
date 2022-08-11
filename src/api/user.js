import request from '@/utils/request'
export function addCategorys() {
  return request({
    url: '/api/get',
    method: 'get',
  })
}