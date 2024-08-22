import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import {
  charactersFavoriteSelector,
  charactersSelector,
} from "../../../common/modules/characters/store/selectors";
import Loading from "../../shared/components/Loading";
import { Character } from "../../../common/types";
import {
  setAddFavorite,
  setDeletedFavorite,
} from "../../../common/modules/characters/store/actions";
import useSortedCharacters from "../../../common/hooks/useSortedCharacters";
import useFetchCharacters from "../../../common/hooks/useFetchCharacters";
import NavbarComponent from "../components/Navbar";

type Props = {
  children: React.ReactElement;
};

const NavbarContainer: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const pathnameParams = window.location.pathname;
  const match = pathnameParams.match(/\/character\/(\d+)/);

  const activeCharacterId = match ? match[1] : null;

  const { error, loading } = useFetchCharacters();

  const characters = useAppSelector(charactersSelector);
  const favoriteCharacters = useAppSelector(charactersFavoriteSelector);

  const { sortedCharacters, setSortOrder, sortOrder } =
    useSortedCharacters(characters);
  const {
    sortedCharacters: sortedFavoriteCharacters,
    setSortOrder: setSortOrderFvaorite,
  } = useSortedCharacters(favoriteCharacters);

  const viewAllInfo = (id: string) => navigate(`/character/${id}`);

  const filteredSortedCharacters = sortedCharacters.filter(
    (character) =>
      !favoriteCharacters.some((favorite) => favorite.id === character.id)
  );

  const addToFavorites = (character: Character) =>
    dispatch(setAddFavorite({ favorite: character }));

  const deletedToFavorites = (character: Character) =>
    dispatch(setDeletedFavorite({ favorite: character }));

  React.useEffect(() => {
    if (error) {
      navigate("/TryAgain");
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavbarComponent
      characters={filteredSortedCharacters}
      favoriteCharacters={sortedFavoriteCharacters}
      viewAllInfo={viewAllInfo}
      addToFavorites={addToFavorites}
      deletedToFavorites={deletedToFavorites}
      setSortOrder={setSortOrder}
      setSortOrderFvaorite={setSortOrderFvaorite}
      sortOrder={sortOrder}
      children={children}
      activeCharacterId={activeCharacterId}
    />
  );
};

export default NavbarContainer;
