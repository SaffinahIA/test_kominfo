import {
  SET_LOADING,SET_DATA_USER
} from "../types";

export const setDataUser = (payload) => ({
  type: SET_DATA_USER,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
