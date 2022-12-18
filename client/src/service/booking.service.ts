import { JWTKEY } from "app-constants/browser.constatnt";
import { API_MYBOOKING, HOST, URL_API } from "app-constants/apiUrl.constant";
import Cookies from "js-cookie";
import { appStateActions } from "store/appState/app-state-slice";

import {
  getDataFromApi,
  getDataFromApiReactRouter,
  handleErrorApi,
  handleErrorApiReactRouter,
} from "utils/service.util";
import { AppDispatch } from "../store/main.store";

export const createBookingCheckout = (query: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await getDataFromApi(dispatch, `${URL_API}booking/${query}`, "get");
    } catch (err) {
      handleErrorApi(err, dispatch);
    } finally {
      dispatch(appStateActions.setFinishLoading());
    }
  };
};
export const getUserBookings = async () => {
  try {
    const { data } = await getDataFromApiReactRouter(
      `${URL_API}${API_MYBOOKING}`,
      "get",
      undefined,
      Cookies.get(JWTKEY)
    );
    return data;
  } catch (err) {
    return handleErrorApiReactRouter(err);
  }
};
export const getUserBooking = async (id: string) => {
  try {
    const { data } = await getDataFromApiReactRouter(
      `${URL_API}${API_MYBOOKING}/${id}`,
      "get",
      undefined,
      Cookies.get(JWTKEY)
    );
    return data;
  } catch (err) {
    return handleErrorApiReactRouter(err);
  }
};
