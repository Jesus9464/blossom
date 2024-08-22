import React from "react";

import FavoriteComponent from "../components/Favorite.component";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { charactersFavoriteSelector } from "../../../common/modules/characters/store/selectors";
import useSortedCharacters from "../../../common/hooks/useSortedCharacters";
import { Character } from "../../../common/types";
import { setDeletedFavorite } from "../../../common/modules/characters/store/actions";

const FavoriteContainer = () => {
  const dispatch = useAppDispatch();

  const favoriteCharacters = useAppSelector(charactersFavoriteSelector);

  const { sortedCharacters, setSortOrder } =
    useSortedCharacters(favoriteCharacters);

  const viewAllInfo = (id: string) =>
    alert(`${JSON.stringify(id)} added to favorites`);

  const deletedToFavorites = (character: Character) =>
    dispatch(setDeletedFavorite({ favorite: character }));

  return (
    <FavoriteComponent
      viewAllInfo={viewAllInfo}
      characterFavorite={sortedCharacters}
      setSortOrder={setSortOrder}
      deletedToFavorites={deletedToFavorites}
    />
  );
};

export default FavoriteContainer;
