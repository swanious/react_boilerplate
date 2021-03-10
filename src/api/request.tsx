// axios 재사용을 위한 폴더입니다. 향후 컴포넌트가 늘어날 시 분리하여 사용할 수 있습니다.
// 파일명은 임시입니다.
import axios, { AxiosResponse, Method } from 'axios';

// .env 파일의 변수명은 무조건 `REACT_APP_`으로 생성해야합니다.
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// request를 통해 axios를 재사용할 수 있습니다.
// 예로, baseurl/user로 get요청을 보낸다고할때,
// request('get', '/user', {access-token: localStorage.getItem(...)})형식으로 사용할 수 있겠죵?
const request = (
  method: Method,
  url: string,
  params: any,
): Promise<AxiosResponse> => {
  return api.request({
    method,
    url,
    params,
  });
};
export default request;
