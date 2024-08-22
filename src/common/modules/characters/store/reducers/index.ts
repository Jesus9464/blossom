import { createReducer } from "@reduxjs/toolkit";

import { setCharacters } from "../actions";
import { Character } from "../../../../types";

interface CharacterState {
  characters: Character[];
}
const initialState: CharacterState = {
  characters: [],
};

const charactersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCharacters, (state, action) => {
    state.characters = action.payload.character;
  });
});

export type CharactersState = ReturnType<typeof charactersReducer>;

export default charactersReducer;
