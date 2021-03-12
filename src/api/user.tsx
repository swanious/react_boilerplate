import { createInstance } from './index';

const instance = createInstance();

interface userLoginTyped {
  email: string;
  password: string;
}

// function axiosSignup(user: userLoginTyped, success, fail) {
//   instance.post('user/,', JSON.stringify(user)).then(success).catch(fail);
// }

// function axiosLogin(token, success, fail) {
//   instance.defaults.headers['access-token'] = localStorage.getItem(
//     'access-token',
//   );
//   instance
//     .get('jwt/authenticate', JSON.stringify(token))
//     .then(success)
//     .catch(fail);
// }
