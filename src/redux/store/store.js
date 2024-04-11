import { createStore,applyMiddleware,combineReducers } from "redux";
import { thunk } from "redux-thunk";
import genreReducer from "../reducers/genreReducer";
import movieReducer from "../reducers/movieReducer";

const rootReducer = combineReducers({
  genre: genreReducer,
  movie: movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
