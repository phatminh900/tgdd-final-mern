import axios from "axios";
import {
  forgotPasswordReactRouter,
  loginReactRouter,
  resetPassword,
  signupReactRouter,
  updateUser,
} from "service/user.service";
import { vi } from "vitest";

const rejectedUserService = async (msg: string, statusCode: number) => {
  const userValue = {
    email: "phatminh900@gmail.com",
    password: "test12342",
  };
  const dataResponseFail = {
    status: "fail",
    message: msg,
  };
  const responseData = {
    response: {
      data: dataResponseFail,
      status: statusCode,
    },
  };
  return { responseData, userValue };
};

describe("user-service", () => {
  describe("loginReactRouter", () => {
    it("should send data user to server and return back value", async () => {
      const responseData = {
        status: "success",
        data: {
          _id: "6344d86ab0658db7e15ea459",
          name: "Phat Tran",
          email: "phatminh900@gmail.com",
          role: "user",
          __v: 0,
        },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDRkODZhYjA2NThkYjdlMTVlYTQ1OSIsImlhdCI6MTY2Nzk2MjQ2NywiZXhwIjoxNjc1NzM4NDY3fQ.dNWxcmbF-JMF2UJCzCPIY5x-JQR7j2USrieZC8FuHZY",
      };
      const userValue = {
        email: "phatminh900@gmail.com",
        password: "test1234",
      };
      vi.spyOn(axios, "post").mockResolvedValueOnce(responseData);
      const data = await loginReactRouter(userValue);
      expect(data).toEqual(responseData.data);
    });
    it("should send data user to server and get err if wrong account was sent", async () => {
      const { userValue, responseData } = await rejectedUserService(
        "User or password incorrect!",
        404
      );
      vi.spyOn(axios, "post").mockRejectedValueOnce(responseData);

      return await expect(loginReactRouter(userValue)).rejects.toThrow();
    });
  });

  describe("signupReactRouter", () => {
    it("should send data user to server and return back value", async () => {
      const responseData = {
        status: "success",
        data: {
          email: "phatminh604@gmail.com",
          name: "phat",
          role: "user",
          __v: 0,
          _id: "636b233b8065cf5f964b5f8a",
        },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDRkODZhYjA2NThkYjdlMTVlYTQ1OSIsImlhdCI6MTY2Nzk2MjQ2NywiZXhwIjoxNjc1NzM4NDY3fQ.dNWxcmbF-JMF2UJCzCPIY5x-JQR7j2USrieZC8FuHZY",
      };
      const userValue = {
        name: "Phattran",
        email: "phatminh1@gmail.com",
        password: "test1234",
        passwordConfirm: "test1234",
      };
      vi.spyOn(axios, "post").mockResolvedValueOnce(responseData);
      const data = await signupReactRouter(userValue);
      expect(data).toEqual(responseData.data);
    });
    it("should send data user to server and get err if existent  account  was sent", async () => {
      const { responseData, userValue } = await rejectedUserService(
        `email  test@gmail.comalready exist.`,
        400
      );

      vi.spyOn(axios, "post").mockRejectedValue(responseData);
      return await expect(
        signupReactRouter({
          ...userValue,
          name: "Phat",
          passwordConfirm: userValue.password,
        })
      ).rejects.toThrow();
    });
  });
  describe("forgotPasswordReactRouter", () => {
    it("should send an obj contains success msg", async () => {
      const testValue = { email: "test@gmail.com" };
      const responseData = {
        status: "success",
        data: {
          message: "Ok",
        },
      };
      vi.spyOn(axios, "post").mockResolvedValueOnce(responseData);
      const result = await forgotPasswordReactRouter(testValue);
      expect(result).toEqual(responseData.data);
    });
    it("should send an obj contains err msg if no email was found", async () => {
      const { userValue, responseData } = await rejectedUserService(
        "Cant find this email",
        404
      );

      vi.spyOn(axios, "post").mockRejectedValueOnce(responseData);
      await expect(forgotPasswordReactRouter(userValue)).rejects.toThrow();
    });
  });
  describe("resetPassword", () => {
    it("should create new password and send to server and return back value", async () => {
      const responseData = {
        status: "success",
        data: {
          status: "success",
          message: "change password successfully",
        },
      };
      const userValue = {
        token: "d601d74bc5c5633596c5e2a9",
        password: "test1234",
        passwordConfirm: "test1234",
      };
      vi.spyOn(axios, "patch").mockResolvedValueOnce(responseData);
      const data = await resetPassword(userValue.token, userValue);
      expect(data).toEqual(responseData.data);
    });
    it("should throw an obj contains err msg if password doesn't match", async () => {
      const { responseData } = await rejectedUserService(
        `password and passwordConfirm doesn't match`,
        400
      );
      const userValue = {
        token: "d601d74bc5c5633596c5e2a9",
        password: "test1234",
        passwordConfirm: "test12344",
      };
      vi.spyOn(axios, "patch").mockRejectedValue(responseData);
      return await expect(
        resetPassword(userValue.token, userValue)
      ).rejects.toThrow();
    });
    it("should throw an obj contains err msg if token invalid or expires", async () => {
      const { responseData } = await rejectedUserService(
        `Token invalid or expires`,
        400
      );
      const userValue = {
        token: "d601d74bc5c5633596c5e2a9",
        password: "test1234",
        passwordConfirm: "test1234",
      };
      const userValue2 = {
        token: "d601d74bc5c5633596c5e2a",
        password: "test1234",
        passwordConfirm: "test1234",
      };
      vi.spyOn(axios, "patch").mockRejectedValue(responseData);
      await expect(resetPassword(userValue.token, userValue)).rejects.toThrow();
      await expect(
        resetPassword(userValue2.token, userValue2)
      ).rejects.toThrow();
    });
  });
  describe("updateUser", () => {
    it("should send an obj contains data about the account", async () => {
      const testValue = { name: "Phattran" };
      const responseData = {
        status: "success",
        data: {
          email: "test@gmail.com",
          name: "phat tran",
          role: "user",
          __v: 0,
          _id: "636b233b8065cf5f964b5f8a",
        },
      };
      vi.spyOn(axios, "patch").mockResolvedValueOnce(responseData);
      const result = await updateUser(testValue);
      expect(result).toEqual(responseData.data);
    });
    it("should throw an obj contains err msg if token invalid or expires", async () => {
      const { responseData } = await rejectedUserService(
        `Token invalid or expires`,
        400
      );
      const testValue = { name: "Phattran" };

      vi.spyOn(axios, "patch").mockRejectedValue(responseData);
      await expect(updateUser(testValue)).rejects.toThrow();
    });
  });
});
