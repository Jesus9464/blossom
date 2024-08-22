import React, { Dispatch, SetStateAction } from "react";
import { Character } from "../../../common/types";
import Card from "../../shared/components/Card";
import Button from "../../shared/components/Button";

type Props = {
  characters: Character[];
  favoriteCharacters: Character[];
  addToFavorites: (character: Character) => void;
  viewAllInfo: (id: string) => void;
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
};

const HomeComponent: React.FC<Props> = ({
  characters,
  favoriteCharacters,
  addToFavorites,
  viewAllInfo,
  setSortOrder,
}) => (
  <>
    <div className="flex justify-end gap-4 mb-4 mt-4 mr-10">
      <Button text="order A-Z" onClick={() => setSortOrder("asc")} />
      <Button text="order Z-A" onClick={() => setSortOrder("desc")} />
    </div>
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
  </>
);

export default HomeComponent;
