import { createAction } from "@reduxjs/toolkit";
import { Character } from "../../../../types";

export const setCharacters = createAction<{
  character: Character[];
}>("root/setCharacters");

export const setAddFavorite = createAction<{
  favorite: Character;
}>("root/setAddFavorite");

export const setDeletedFavorite = createAction<{
  favorite: Character;
}>("root/setDeletedFavorite");
