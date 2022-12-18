import { vi } from "vitest";
import Cookies from "js-cookie";
const userDoLogin = () => {
  const localStorageUser = {
    email: "phatminh900@gmail.com",
    name: "Phat Tran",
    role: "user",
    _id: "6344d86ab0658db7e15ea459",
  };
  vi.stubGlobal("localStorage", {
    getItem: (key: string) => JSON.stringify(localStorageUser),
  });
  // @ts-ignore
  vi.spyOn(Cookies, "get").mockReturnValue("jwtcookie");
  return {
    email: localStorageUser.email,
    name: localStorageUser.name,
    _id: localStorageUser._id,
  };
};
const userNotLogin = () => {
  const localStorageUser = "";
  vi.stubGlobal("localStorage", {
    getItem: (key: string) => JSON.stringify(localStorageUser),
  });
  // @ts-ignore
  vi.spyOn(Cookies, "get").mockReturnValueOnce("");
};
export { userDoLogin, userNotLogin };
