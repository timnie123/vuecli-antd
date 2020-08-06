/**
 * @modifed: nielei
 * @date: 2019/7/1 11:18
 * @description: axios配置
 * @param:
 * @return:
 */

import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from 'qs';

const $axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? `${window.location.protocol}//${window.location.host}/`
    : 'http://localhost:8080/',

  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json',
  },
});

// axios config
$axios.defaults.withCredentials = true;

$axios.formPost = (url, data = {}, config = {}) => {
  // eslint-disable-next-line no-param-reassign
  config.headers = config.headers || {};
  // eslint-disable-next-line no-param-reassign
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return $axios.post(url, qs.stringify(data), config);
};

// Add a request interceptor
$axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// Add a response interceptor
$axios.interceptors.response.use(
  (response) => {
    if (response.data.code) {
      if (response.data.code !== 200) {
        /* Notification.error({
          title: '錯誤提示',
          message: response.data.message || '數據請求失敗',
          position: 'bottom-right',
        }); */
      }
    } else if (response.status) {
      if (response.status !== 200) {
        /* Notification.error({
          title: '錯誤提示',
          message: response.message || '數據請求失敗',
          position: 'bottom-right',
        }); */
      }
    }
    return response;
  },
  (error) => Promise.reject(error),
);

export default $axios;
