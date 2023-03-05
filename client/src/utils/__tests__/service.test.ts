// import { vi } from "vitest";
// import axios from "axios";
// import {
//   deleteToApi,
//   getDataFromApiReactRouter,
//   getToApi,
//   patchToApi,
//   postToApi,
//   handleErrorApiReactRouter,
// } from "utils/service.util";
// import { getTypeHttpMethod } from "utils/service.util";
// import { HTTPMethod } from "utils/service.util";
// describe("service", () => {
//   describe("getDataFromApiReactRouter", () => {
//     it("should get data from api and return it", async () => {
//       const testData = {
//         url: "phones",
//         type: "get",
//       };
//       const dataResultsTest = [{}, {}, {}];
//       const responseData = {
//         data: {
//           status: "success",
//           results: dataResultsTest.length,
//           data: dataResultsTest,
//         },
//       };
//       vi.spyOn(axios, "get").mockResolvedValue(responseData);
//       const dataApi = await getDataFromApiReactRouter(testData.url, "get");
//       expect(dataApi).toEqual(responseData.data);
//     });
//     it("should get post from api and return it", async () => {
//       const testData = {
//         url: "phones",
//         type: "get",
//       };
//       const postData = {
//         title: "Iphone",
//         price: 360000,
//         slug: "/iphone",
//       };
//       const dataResultsTest = { postData, _id: Math.random() };

//       const responseData = {
//         data: {
//           status: "success",
//           data: dataResultsTest,
//         },
//       };

//       vi.spyOn(axios, "post").mockImplementationOnce(
//         (url: string, data: any, config: any) => {
//           return Promise.resolve(responseData);
//         }
//       );
//       const dataApi = await getDataFromApiReactRouter(
//         testData.url,
//         "post",
//         postData
//       );
//       expect(dataApi).toEqual(responseData.data);
//     });
//   });
//   describe("getTypeHttpMethod", () => {
//     it("should return appropriate method based on type given", () => {
//       const type1 = "get";
//       const type2 = "post";
//       const type3 = "patch";
//       const type4 = "delete";
//       const result1 = getTypeHttpMethod(type1);
//       const result2 = getTypeHttpMethod(type2);
//       const result3 = getTypeHttpMethod(type3);
//       const result4 = getTypeHttpMethod(type4);
//       expect(result1).toEqual(getToApi);
//       expect(result2).toEqual(postToApi);
//       expect(result3).toEqual(patchToApi);
//       expect(result4).toEqual(deleteToApi);
//     });
//   });
//   describe("handleErrorApiReactRouter", () => {
//     it("should throw an err when api reject", () => {
//       const errApi = {
//         status: "fail",
//         message: "err",
//       };

//       const errResponseApi = {
//         response: {
//           data: errApi,
//           status: 404,
//         },
//       };
//       const toThrow = () => handleErrorApiReactRouter(errResponseApi);
//       expect(toThrow).toThrow();
//     });
//   });
// });
