import axios from 'axios';

// .env 파일의 변수명은 무조건 `REACT_APP_`으로 생성해야합니다.
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
}

export { createInstance };
