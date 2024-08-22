import { createReducer } from "@reduxjs/toolkit";

import { setAddFavorite, setCharacters, setDeletedFavorite } from "../actions";
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
      // Check if the favorite character is already in the list
      const alreadyFavorite = state.favorites.some(
        (fav) => fav.id === action.payload.favorite.id
      );
      if (!alreadyFavorite) {
        state.favorites.push(action.payload.favorite);
      }
    }
  });

  builder.addCase(setDeletedFavorite, (state, action) => {
    if (action.payload.favorite) {
      // Remove from favorites
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload.favorite.id
      );
    }
  });
});

export type CharactersState = ReturnType<typeof charactersReducer>;

export default charactersReducer;
