// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { it, expect, describe, vi } from "vitest";
// import FormSearch from "../form-search.component";
// import { ISearchItem } from "../search-header.type";
// describe("FormSearch", () => {
//   describe("type in input", () => {
//     it("should make a request to find product when typing", async () => {
//       const user = userEvent.setup();
//       const search = vi.fn((e: React.ChangeEvent) => {
//         return Promise.resolve();
//       });
//       const onSetResults = vi.fn((products: ISearchItem[]) => {});
//       render(<FormSearch onSetResults={onSetResults} />);
//       const inputEl = screen.getByPlaceholderText(/What are you looking for?/i);
//       const productFind = "macbook";
//       await user.type(inputEl, productFind);

//       expect(search).toBeCalled();
//       expect(onSetResults).toBeCalledTimes(productFind.length);
//     });
//     it("should not make a request to find product when not a character was typed (/*/=)", async () => {
//       const user = userEvent.setup();
//       const search = vi.fn((e: React.ChangeEvent) => {
//         return Promise.resolve();
//       });
//       const onSetResults = vi.fn((products: ISearchItem[]) => {});
//       render(<FormSearch onSetResults={onSetResults} />);
//       const inputEl = screen.getByPlaceholderText(/What are you looking for?/i);
//       const productFind = "$#@";
//       await user.type(inputEl, productFind);

//       expect(search).not.toBeCalled();
//       expect(onSetResults).not.toBeCalledTimes(productFind.length);
//     });
//   });
// });
