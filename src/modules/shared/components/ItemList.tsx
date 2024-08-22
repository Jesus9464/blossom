import React from "react";
import { Character } from "../../../common/types";

type Props = {
  character: Character;
  icon: string;
  buttonOnclick: () => void;
  cardOnclick: () => void;
  isActive: boolean;
};

const ItemList: React.FC<Props> = ({
  character,
  icon,
  buttonOnclick,
  cardOnclick,
  isActive,
}) => {
  return (
    <li
      key={character.id}
      className={`flex items-center justify-between h-[74px] p-[16px_20px] gap-[16px] rounded-md transition-all duration-300 ${
        isActive
          ? "bg-[#EEE3FF] opacity-100"
          : "bg-primary-100 hover:bg-[#EEE3FF] hover:opacity-100"
      }`}
    >
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={cardOnclick}
      >
        <img
          src={character.image}
          alt={character.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">{character.name}</p>
          <p className="text-gray-500 text-sm">{character.species}</p>
        </div>
      </div>
      <button
        className="p-2 rounded-full bg-white hover:bg-primary-100 transition-all duration-300"
        onClick={buttonOnclick}
      >
        <img src={icon} alt="Favorite Icon" className="w-6 h-6 mx-auto" />
      </button>
    </li>
  );
};

export default ItemList;
