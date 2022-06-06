import Encryption from 'src/utils/encryption';
const isLogin = () => {
  if (typeof localStorage === 'undefined') return {};
  var loginCookie = localStorage.getItem('user_info') || '';
  try {
    loginCookie = JSON.parse(Encryption.decryptAES(loginCookie));
  } catch (e) {
    return false;
  }
  if (!loginCookie.login || loginCookie.expired < Date.now()) return false;
  return loginCookie;
}

export default isLogin;