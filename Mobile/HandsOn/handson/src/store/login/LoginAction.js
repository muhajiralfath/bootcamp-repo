import { LOGIN, LOGOUT } from "../../utils/constant";

function loginAction() {
  return {
    type: LOGIN,
  };
}

function logoutAction() {
  return {
    type: LOGOUT,
  };
}

export { loginAction, logoutAction };
