import axios from "axios";
import { vi } from "vitest";
import { getUserBookings ,getUserBooking} from "service/booking.service";
const productPurchased = {
  total: 33990000,
  userAddress: "Vn",
  _id: "636cad5fecaf30f2e41d78c6",
  product: {
    currentColor: "Vàng Đồng",
    imgCover:
      "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
    quantity: 1,
    title: "iPhone 13 Pro Max",
  },
};

describe("booking-service", () => {
  describe("getUserBookings", () => {
    it("should get all bookings of user", async () => {
      const userBooked = [productPurchased];
      const responseData = {
        data: {
          status: "success",
          data: userBooked,
        },
      };
      vi.spyOn(axios, "get").mockResolvedValueOnce(responseData);
      const result = await getUserBookings();
      expect(result).toEqual(responseData.data.data);
    });
    it("should return err if there something wrong", async () => {
      const responseData = {
        response: {
          data: {
            status: "fail",
            message: "err",
          },
        },
      };
      vi.spyOn(axios, "get").mockRejectedValueOnce(responseData);
      await expect(getUserBookings()).rejects.toThrow();
    });
  });
  describe("getUserBooking", () => {
    it("should get individual purchased product", async () => {
      const responseData = {
        data: {
          status: "success",
          data: productPurchased,
        },
      };
      vi.spyOn(axios, "get").mockResolvedValueOnce(responseData);
      const result = await getUserBooking(productPurchased._id);
      expect(result).toEqual(responseData.data.data);
    });
    it("should return err if there something wrong", async () => {
      const responseData = {
        response: {
          data: {
            status: "fail",
            message: "err",
          },
        },
      };
      vi.spyOn(axios, "get").mockRejectedValueOnce(responseData);
      await expect(getUserBookings()).rejects.toThrow();
    });
  });
});
