import React from "react";
import { Character } from "../../../common/types";
import Button from "./Button";

type Props = {
  character: Character;
  onAddToFavorites: () => void;
  onViewDetails: () => void;
  addToFavoritesText: string;
  viewDetailsText: string;
  isAddToFavoritesIsDisabled?: boolean;
};

const Card: React.FC<Props> = ({
  character,
  onAddToFavorites,
  onViewDetails,
  addToFavoritesText,
  viewDetailsText,
  isAddToFavoritesIsDisabled = false,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col w-full max-w-xs mx-auto cursor-pointer">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-md font-semibold">{character.name}</h2>
        <p className="text-gray-600 mb-4">{character.species}</p>
        <div className="flex gap-4">
          <Button
            className={`px-4 py-2 font-semibold rounded-md transition-colors duration-300 ${
              isAddToFavoritesIsDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={onAddToFavorites}
            isDisabled={isAddToFavoritesIsDisabled}
            text={addToFavoritesText}
          />
          <Button
            className="px-4 py-2 bg-lime-900 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors duration-300"
            onClick={onViewDetails}
            text={viewDetailsText}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
