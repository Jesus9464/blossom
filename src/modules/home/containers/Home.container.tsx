import React from "react";
import { useNavigate } from "react-router-dom";

import HomeComponent from "../components/Home.component";
import useFetchCharacters from "../hooks/useFetchCharacters";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import {
  charactersFavoriteSelector,
  charactersSelector,
} from "../../../common/modules/characters/store/selectors";
import Loading from "../../shared/components/Loading";
import { Character } from "../../../common/types";
import { setAddFavorite } from "../../../common/modules/characters/store/actions";

const HomeContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useFetchCharacters();
  const characters = useAppSelector(charactersSelector);
  const favoriteCharacters = useAppSelector(charactersFavoriteSelector);

  const viewAllInfo = (id: string) =>
    alert(`${JSON.stringify(id)} added to favorites`);

  const addToFavorites = (character: Character) =>
    dispatch(setAddFavorite({ favorite: character }));

  React.useEffect(() => {
    if (error) {
      navigate("/TryAgain");
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <HomeComponent
      characters={characters}
      addToFavorites={addToFavorites}
      viewAllInfo={viewAllInfo}
      favoriteCharacters={favoriteCharacters}
    />
  );
};

export default HomeContainer;
