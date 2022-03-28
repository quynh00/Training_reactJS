import { usersData } from '../dataFile/User'

function checkLogin(username, password) {
  try {
    let data = usersData.find(user => (user.username === username && user.password === password));
    return data;
  }catch (e) {
    return [];
  }
}
export default checkLogin;