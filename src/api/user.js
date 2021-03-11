import { createInstance } from './index';

const instance = createInstance();

function axiosSignup(user, success, fail) {
  instance.post('user/,', JSON.stringify(user)).then(success).catch(fail);
}

function axiosLogin(loginInfo, success, fail) {
  instance
    .get('jwt/authenticate', JSON.stringify(loginInfo))
    .then(success)
    .catch(fail);
}

export { axiosSignup, axiosLogin };
