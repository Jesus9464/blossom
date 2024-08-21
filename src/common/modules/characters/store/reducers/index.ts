import { createReducer } from "@reduxjs/toolkit";

import { setCredentials } from "../actions";

interface CharacterState {
  characters: any[];
}
const initialState: CharacterState = {
  characters: [],
};

const charactersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCredentials, (state, action) => {
    state.characters = action.payload.data;
  });
});

export type CharactersState = ReturnType<typeof charactersReducer>;

export default charactersReducer;
