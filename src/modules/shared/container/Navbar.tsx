import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation(); // Usamos useLocation para obtener la ruta actual
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [characterFilter, setCharacterFilter] = useState<string>("All");
  const [speciesFilter, setSpeciesFilter] = useState<string>("All");

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

  const filteredCharacters = sortedCharacters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpeciesFilter =
      speciesFilter === "All" || character.species === speciesFilter;
    const matchesCharacterFilter =
      characterFilter === "All" ||
      (characterFilter === "Starred" &&
        favoriteCharacters.some((fav) => fav.id === character.id)) ||
      (characterFilter === "Others" &&
        !favoriteCharacters.some((fav) => fav.id === character.id));

    return matchesSearch && matchesSpeciesFilter && matchesCharacterFilter;
  });

  const filteredFavoriteCharacters = sortedFavoriteCharacters.filter(
    (character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSortedCharacters = filteredCharacters.filter(
    (character) =>
      !favoriteCharacters.some((favorite) => favorite.id === character.id)
  );

  const addToFavorites = (character: Character) =>
    dispatch(setAddFavorite({ favorite: character }));

  const deletedToFavorites = (character: Character) =>
    dispatch(setDeletedFavorite({ favorite: character }));

  const handleFilterChange = (filterType: string, filterValue: string) => {
    if (filterType === "character") {
      setCharacterFilter(filterValue);
    } else if (filterType === "species") {
      setSpeciesFilter(filterValue);
    }
  };

  useEffect(() => {
    if (error) {
      navigate("/TryAgain");
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  const isMobile = window.innerWidth < 768;
  const isHome = location.pathname === "/";

  return (
    <NavbarComponent
      characters={filteredSortedCharacters}
      favoriteCharacters={filteredFavoriteCharacters}
      viewAllInfo={viewAllInfo}
      addToFavorites={addToFavorites}
      deletedToFavorites={deletedToFavorites}
      setSortOrder={setSortOrder}
      setSortOrderFvaorite={setSortOrderFvaorite}
      sortOrder={sortOrder}
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      children={children}
      activeCharacterId={activeCharacterId}
      onFilterChange={handleFilterChange}
      characterFilter={characterFilter}
      isHome={isHome}
      isMobile={isMobile}
    />
  );
};

export default NavbarContainer;
