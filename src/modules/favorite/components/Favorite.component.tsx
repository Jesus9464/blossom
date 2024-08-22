import React, { Dispatch, SetStateAction } from "react";
import { Character } from "../../../common/types";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";

type Props = {
  characterFavorite: Character[];
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
  viewAllInfo: (id: string) => void;
  deletedToFavorites: (character: Character) => void;
};

const FavoriteComponent: React.FC<Props> = ({
  characterFavorite,
  setSortOrder,
  viewAllInfo,
  deletedToFavorites,
}) => (
  <div className="p-4">
    {characterFavorite.length > 0 ? (
      <>
        <div className="flex justify-end gap-4 mb-4 mt-4 mr-10">
          <Button text="Order A-Z" onClick={() => setSortOrder("asc")} />
          <Button text="Order Z-A" onClick={() => setSortOrder("desc")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {characterFavorite.map((character) => (
            <Card
              key={character.id}
              character={character}
              onAddToFavorites={() => deletedToFavorites(character)}
              onViewDetails={() => viewAllInfo(character.id)}
              addToFavoritesText="Delete Favorite"
              viewDetailsText="View Details"
            />
          ))}
        </div>
      </>
    ) : (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-700">
          You haven't added any favorites yet.
        </p>
      </div>
    )}
  </div>
);

export default FavoriteComponent;
