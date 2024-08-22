import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../common/store/hooks";
import {
  charactersFavoriteSelector,
  charactersSelector,
} from "../../../common/modules/characters/store/selectors";

const RedirectToCharacter: React.FC = () => {
  const navigate = useNavigate();
  const characters = useAppSelector(charactersSelector);
  const favoriteCharacters = useAppSelector(charactersFavoriteSelector);

  console.log();

  useEffect(() => {
    navigate(
      `/character/${
        favoriteCharacters.length > 0
          ? favoriteCharacters[0].id
          : characters[0]?.id
      }`,
      {
        replace: true,
      }
    );
  }, [characters, favoriteCharacters, navigate]);

  return null;
};

export default RedirectToCharacter;
