import { createAction } from "@reduxjs/toolkit";
import { Character } from "../../../../types";

export const setCharacters = createAction<{
  character: Character[];
}>("root/setCharacters");
