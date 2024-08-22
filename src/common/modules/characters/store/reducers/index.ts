import { createReducer } from "@reduxjs/toolkit";

import {
  addCommentCharacter,
  setAddFavorite,
  setCharacters,
  setDeletedFavorite,
} from "../actions";
import { Character, CommentType } from "../../../../types";

interface CharacterState {
  characters: Character[];
  favorites: Character[];
  comments: CommentType[];
}
const initialState: CharacterState = {
  characters: [],
  favorites: [],
  comments: [],
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

  builder.addCase(addCommentCharacter, (state, action) => {
    const { comment, id } = action.payload;

    if (!state.comments) {
      state.comments = [];
    }

    const existingComment = state.comments?.find((c) => c.id === id);

    if (existingComment) {
      // If it exists, add the new comment to the list
      existingComment.comments.push(comment);
    } else {
      // If it does not exist, create a new entry
      state.comments.push({ id, comments: [comment] });
    }
  });
});

export type CharactersState = ReturnType<typeof charactersReducer>;

export default charactersReducer;
