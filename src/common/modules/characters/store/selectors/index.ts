import { createDraftSafeSelector } from "@reduxjs/toolkit";

import type { RootState } from "../../../../store";
import { CommentType } from "../../../../types";

const rootSelector = (state: RootState) => state;

export const charactersSelector = createDraftSafeSelector(
  rootSelector,
  (characters) => characters.characters.characters
);

export const charactersFavoriteSelector = createDraftSafeSelector(
  rootSelector,
  (characters) => characters.characters.favorites
);

export const commentSelector = createDraftSafeSelector(
  (state: RootState) => state.characters.comments,
  (_: RootState, characterId: string) => characterId,
  (comments: CommentType[], characterId: string) => {
    const characterComments = comments.find((c) => c.id === characterId);
    return characterComments ? characterComments.comments : [];
  }
);
