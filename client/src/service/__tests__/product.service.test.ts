import axios from "axios";
import {
  getProductsReactRouter,
  Resources,
  getProductReactRouter,
  getProductSlug,
} from "service/product.service";
import { vi } from "vitest";

describe("product-service", () => {
  describe("getProductsReactRouter", () => {
    it("should return an arr contains data", async () => {
      const resource: Resources = "phones";
      const dataResponse = [{}, {}];
      const responseData = {
        data: {
          status: "success",
          data: dataResponse,
        },
      };
      vi.spyOn(axios, "get").mockResolvedValueOnce(responseData);
      const data = await getProductsReactRouter(resource);
      expect(data).toEqual(dataResponse);
    });
    it("should return err if there something wrong", async () => {
      const resource: Resources = "phones";
      const responseData = {
        response: {
          data: {
            status: "fail",
            message: "err",
          },
        },
      };
      vi.spyOn(axios, "get").mockRejectedValueOnce(responseData);
      await expect(getProductsReactRouter(resource)).rejects.toThrow();
    });
  });
  describe("getProductReactRouter", () => {
    it("should return a product", async () => {
      const resource: Resources = "phones";
      const slug = "iphone-13";
      const dataResponse = {};
      const responseData = {
        data: {
          status: "success",
          data: dataResponse,
        },
      };
      vi.spyOn(axios, "get").mockResolvedValueOnce(responseData);
      const data = await getProductReactRouter(resource, slug);
      expect(data).toEqual(dataResponse);
    });
    it("should return err if there something wrong", async () => {
      const resource: Resources = "phones";
      const slug = "iphone-13";
      const responseData = {
        response: {
          data: {
            status: "fail",
            message: "err",
          },
        },
      };
      vi.spyOn(axios, "get").mockRejectedValueOnce(responseData);
      await expect(getProductReactRouter(resource, slug)).rejects.toThrow();
    });
  });
  describe("getProductSlug", () => {
    it("should get a product based on slug given", async () => {
      const resource: Resources = "phones";
      const slug = "iphone-13";
      const dataResponse = {};
      const responseData = {
        data: {
          status: "success",
          data: dataResponse,
        },
      };
      vi.spyOn(axios, "get").mockResolvedValueOnce(responseData);
      const data = await getProductSlug(resource, slug);
      expect(data).toEqual(dataResponse);
    });
    it("should return err if there something wrong", async () => {
      const resource: Resources = "phones";
      const slug = "iphone-13";
      const responseData = {
        response: {
          data: {
            status: "fail",
            message: "err",
          },
        },
      };
      vi.spyOn(axios, "get").mockRejectedValueOnce(responseData);
      await expect(getProductSlug(resource, slug)).rejects.toThrow();
    });
  });
});
