export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) => 
  Object.keys(options).filter(key => !!options[key]).join(' ');

export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined;

export const cookieTime = (days) => {
  let result = new Date();
  let millisecondsPerDay = 86400000;
  // Add number of days (in ms) to add to current date/time
  result.setTime(result.getTime() + (days * millisecondsPerDay));
  return result.toUTCString();
}

export const cookieCreate = (name, value, days) => {
  // Generate an expiration date for the cookie
  let expires = days ? ` ${cookieTime(days)};` : '';
  // Set cookie
  document.cookie = `${name}=${value};${expires} path='/'`;
}

export const cookieFetch = (key) => {
  // Split cookie array
  let cookies = Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return {[key.trim()]: value};
    }))
  return cookies[key];
}

export const cookieDelete = (key) => {
  // Setting a cookie's expire to Epoch causes browser to delete cookie
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
