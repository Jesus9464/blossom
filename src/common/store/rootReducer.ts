import { combineReducers } from "@reduxjs/toolkit";

import * as characters from "../modules/characters";
import characterReducer from "../modules/characters/store/reducers";

export const rootReducer = combineReducers({
  [characters.constants.NAME]: characterReducer,
});
