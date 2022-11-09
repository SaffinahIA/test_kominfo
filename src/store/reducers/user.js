import {
  SET_LOADING, SET_DATA_USER
} from "../types";

const initialState = {
  isLoading: false,
  dataUser: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_USER:
      return {
        ...state,
        dataUser: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default user;
