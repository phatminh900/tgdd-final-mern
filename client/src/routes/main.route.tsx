import React, { useEffect, useRef } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "../app-constants/navigation.constant";
import SharedLayout from "pages/public/shared-layout/shared-layout";
import { Provider } from "react-redux";
import { setupStore } from "store/main.store";
import {
  NotFound,
  Login,
  Phones,
  Review,
  Signup,
  Cart,
  Product,
  Laptops,
  Home,
  OrderHistory,
  ForgotPassword,
  ResetPassword,
  homeLoader,
  productItemLoader,
  ErrorPage,
  reviewLoader,
  signupAction,
  loginAction,
  forgotPasswordAction,
  resetPasswordAction,
  orderUserHistoryLoader,
  OrderUserHistory,
  OrderDetailSpecific,
  orderDetailSpecificLoader,
  UserPersonalInformation,
  userPersonalInfoAction,
} from "pages";
import { ErrorBoundary, PageLoading } from "components";
import AuthContextProvider from "context/auth.context";
import loaderProducts from "utils/loaderProducts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={homeLoader} />

      <Route path={ROUTES.PHONES}>
        <Route index element={<Phones />} loader={loaderProducts} />
        <Route
          path={`:slug`}
          element={<Product />}
          loader={productItemLoader}
        />
        <Route
          path={`:slug/reviews`}
          element={<Review />}
          loader={reviewLoader}
        />
      </Route>

      {/* laptops */}
      <Route path={ROUTES.LAPTOPS}>
        <Route index element={<Laptops />} loader={loaderProducts} />
        <Route
          path={ROUTES.SLUG}
          element={<Product />}
          loader={productItemLoader}
        />
        <Route
          path={ROUTES.PRODUCT_REVIEW}
          element={<Review />}
          loader={reviewLoader}
        />
      </Route>

      {/* Auth */}
      <Route path={ROUTES.LOGIN} element={<Login />} action={loginAction} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} action={signupAction} />
      <Route
        path={ROUTES.FORGOTPASSWORD}
        element={<ForgotPassword />}
        action={forgotPasswordAction}
      />
      <Route
        path={`${ROUTES.RESETPASSWORD}/:token`}
        element={<ResetPassword />}
        action={resetPasswordAction}
      />

      {/*  */}
      <Route path={ROUTES.CART} element={<Cart />} />

      <Route path={ROUTES.ORDER_HISTORY} element={<OrderHistory />}>
        <Route
          index
          element={<OrderUserHistory />}
          loader={orderUserHistoryLoader}
        />
        <Route
          path={":id"}
          element={<OrderDetailSpecific />}
          loader={orderDetailSpecificLoader}
        />
        <Route
          path={ROUTES.PERSONAL_INFORMATION}
          element={<UserPersonalInformation />}
          action={userPersonalInfoAction}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const Root = () => {
  return (
    <Provider store={setupStore()}>
      <ErrorBoundary>
        <AuthContextProvider>
          <React.Suspense fallback={<PageLoading />}>
            <RouterProvider router={router} />
          </React.Suspense>
        </AuthContextProvider>
      </ErrorBoundary>
    </Provider>
  );
};
export default Root;
