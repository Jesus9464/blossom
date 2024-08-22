import React from "react";
import { Character } from "../../../common/types";
import Card from "../../shared/components/Card";

type Props = {
  characters: Character[];
  favoriteCharacters: Character[];
  addToFavorites: (character: Character) => void;
  viewAllInfo: (id: string) => void;
};

const HomeComponent: React.FC<Props> = ({
  characters,
  favoriteCharacters,
  addToFavorites,
  viewAllInfo,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {characters.map((character) => {
        const isDisabled = favoriteCharacters.includes(character);
        return (
          <Card
            key={character.id}
            character={character}
            onAddToFavorites={() => addToFavorites(character)}
            onViewDetails={() => viewAllInfo(character.id)}
            addToFavoritesText="Add to Favorites"
            viewDetailsText="View Details"
            isAddToFavoritesIsDisabled={isDisabled}
          />
        );
      })}
    </div>
  );
};

export default HomeComponent;
