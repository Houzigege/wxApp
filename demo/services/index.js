import {
  request,
  regenerator as regeneratorRuntime
} from '../lib/index.js'


export const getCode = (data) => {
  return request({
    url: 'user/getImageCode',
    method: 'get',
    data: data
  })
};


