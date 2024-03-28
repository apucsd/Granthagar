export const setToLocalStorage = (key: string, token: string) => {
  // console.log("htting setToLocalStorage");
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};
export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
