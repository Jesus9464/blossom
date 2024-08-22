import { createDraftSafeSelector } from "@reduxjs/toolkit";

import type { RootState } from "../../../../store";

const rootSelector = (state: RootState) => state;

export const charactersSelector = createDraftSafeSelector(
  rootSelector,
  (characters) => characters.characters.characters
);
