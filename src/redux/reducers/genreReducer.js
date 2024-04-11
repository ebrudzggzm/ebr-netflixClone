//gelen istekler yapılackalr swictc case ile yaz

import { ActionTypes } from "../store/ActionTypes";

const initialState = {
  isLoading: false,
  error: null,
  genres: [],
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GENRES_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.GENRES_ERROR:
      return { ...state, error: payload };
    case ActionTypes.GENRES_SUCCESS:
      return { ...state, isLoading: false, error: null, genres: payload };

      break;

    default:
      return state;
  }
};

export default genreReducer;
