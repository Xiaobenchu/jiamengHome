/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { merge } from 'lodash';
import qs from 'qs';

import { JError } from '../jmlib/exception/error';

import commonConfig from '../config/common';

const { serverUrl } = commonConfig;

// const TOKEN_KEY = '@jmLogin:token';

const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  // 201: '新建或修改数据成功。',
  // 202: '一个请求已经进入后台排队（异步任务）。',
  // 204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function checkStatus(response: Response) {
  // console.log('response', response);
  if (response.status === 200) {
    return response;
  }
  // if (response.status === 401) {
  //   store.dispatch({
  //     type: 'auth/logout',
  //   });
  //   // return response;
  // }
  const code = response.status;
  const msg = codeMessage[code] ? codeMessage[code] : '服务器出错';

  throw new JError(code, msg);
}

function parseJSON(response: Response) {
  return response.json();
}

/** 配置request请求时的默认参数 */
export async function httpRequest(
  path: string,
  method = 'GET',
  data: any = {},
  opts: any = null,
) {
  // const token = await getToken();
  const httpMethod = method.toUpperCase();

  const options: any = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      _jm_web: 1,
    },
    method: httpMethod,
    cache: 'no-cache',
  };
  options.timeout = 10;

  let queryStr = '';

  if (httpMethod === 'GET') {
    if (data) {
      queryStr = qs.stringify(data, { arrayFormat: 'brackets' });
    }
  } else {
    // if (data) {
    options.body = JSON.stringify(data);
    // }
  }

  if (opts) {
    merge(options, opts);
  }

  let url = serverUrl + path;
  if (queryStr) {
    url += (url.indexOf('?') === -1 ? '?' : '') + queryStr;
  }
  options.method = method;
  // console.log('request', path, options);
  // console.log('url', url);
  // console.log(url, options, 'preparing fetch params ');
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((resData) => {
      // console.log('api', path, resData);
      return resData;
    });
}

export const request = httpRequest;

// async function getToken() {
//   let token = await getStorage(TOKEN_KEY);
//   if (!token) {
//     token = '';
//   }
//   return token;
// }

// export async function setToken(token: string) {
//   storeData(TOKEN_KEY, token);
// }

// export default request;
