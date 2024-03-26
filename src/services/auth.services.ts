import { authKey } from "@/constants/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { decodedToken } from "./jwt.decode";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    // console.log(decodedData);
    return decodedData;
  }
};
export const loginOutUser = () => {
  return localStorage.removeItem(authKey);
};
