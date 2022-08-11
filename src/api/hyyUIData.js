import request from '@/utils/request'
export function getTransferDataApi() {
  return request({
    url: '/api/getTransferData',
    method: 'get',
  })
}