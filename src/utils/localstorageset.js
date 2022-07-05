import Encryption from './encryption';
const isLogin = (key, data) => {
  if (typeof localStorage === 'undefined') return {};
  var loginCookie = localStorage.getItem('user_info') || '';
  try {
    loginCookie = JSON.parse(Encryption.decryptAES(loginCookie));
    loginCookie[key] = data;
    if (!loginCookie.login || loginCookie.expired < Date.now()) return false;
    localStorage.setItem('user_info', Encryption.encryptAES(JSON.stringify(loginCookie)));
    return loginCookie;
  } catch (e) {
    return false;
  }
}

export default isLogin;