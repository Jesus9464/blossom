import { createReducer } from "@reduxjs/toolkit";

import { setAddFavorite, setCharacters } from "../actions";
import { Character } from "../../../../types";

interface CharacterState {
  characters: Character[];
  favorites: Character[];
}
const initialState: CharacterState = {
  characters: [],
  favorites: [],
};

const charactersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCharacters, (state, action) => {
    state.characters = action.payload.character;
  });
  builder.addCase(setAddFavorite, (state, action) => {
    if (action.payload.favorite) {
      state.favorites.push(action.payload.favorite);
    }
  });
});

export type CharactersState = ReturnType<typeof charactersReducer>;

export default charactersReducer;
