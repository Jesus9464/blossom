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

  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name); // order from A a Z
    } else {
      return b.name.localeCompare(a.name); // order from Z a A
    }
  });

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
      characters={sortedCharacters}
      addToFavorites={addToFavorites}
      viewAllInfo={viewAllInfo}
      favoriteCharacters={favoriteCharacters}
      setSortOrder={setSortOrder}
    />
  );
};

export default HomeContainer;
