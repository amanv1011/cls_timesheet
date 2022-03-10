import Cookies from "js-cookie";

/// set cookie
export const setCookie = (key, value) => {
  var date = new Date(value.expiry);

  var seconds = date.getTime() / 1000;
  console.log("is auth", seconds);
  if (process.browser) {
    Cookies.set(key, value.token, {
      expires: seconds,
    });
  }
};

// remove cookie
export const removeCookie = (key) => {
  console.log("remove called", key);
  if (process.browser) {
    Cookies.remove(key);
  }
};

// get cookie
export const getCookie = (key) => {
  if (process.browser) {
    return Cookies.get(key);
  }
};

export const authenticate = (data, next) => {
  setCookie("token", data);
  next();
};

export const isAuth = () => {
  // console.log("is auth", Cookies.get("token"));
  if (process.browser) {
    const cookieChecked = getCookie("token");
    // console.log("token", cookieChecked);
    if (cookieChecked != undefined) {
      return true;
    } else {
      return false;
    }
  }
};

// LOCAL STORAGE
export const storeUserProfile = (key, value) => {
  return localStorage.setItem(key, value);
};
export const getUserProfile = (data) => {
  console.log(data);
  return localStorage.getItem(data);
};

export const deleteUserProfile = (key) => {
  console.log("delete user,key")
  return localStorage.removeItem(key);
};
