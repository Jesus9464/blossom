import React, { Dispatch, SetStateAction } from "react";

import { Character } from "../../../common/types";
import ItemList from "../../shared/components/ItemList";

import searchIcon from "../../../assets/icons/search-icon.svg";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import heartGreenIcon from "../../../assets/icons/heart-green-icon.svg";
import heartGreyIcon from "../../../assets/icons/heart-grey-icon.svg";

type Props = {
  characters: Character[];
  favoriteCharacters: Character[];
  addToFavorites: (character: Character) => void;
  deletedToFavorites: (character: Character) => void;
  viewAllInfo: (id: string) => void;
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
  setSortOrderFvaorite: Dispatch<SetStateAction<"asc" | "desc">>;
  sortOrder: "asc" | "desc";
  children: React.ReactElement;
  activeCharacterId: string | null;
};

const NavbarComponent: React.FC<Props> = ({
  characters,
  favoriteCharacters,
  addToFavorites,
  deletedToFavorites,
  viewAllInfo,
  setSortOrder,
  setSortOrderFvaorite,
  sortOrder,
  children,
  activeCharacterId,
}) => (
  <div className="flex flex-col md:flex-row">
    {/* Aside Section */}
    <aside className="w-full md:w-[600px] bg-gray-50 p-4 shadow-lg md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      <h2 className="text-primary-600 font-bold text-xl mb-4">
        Rick and Morty List
      </h2>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search or filter results"
          className="w-full h-[52px] p-[9px_13px_9px_20px] bg-gray-200 rounded-lg pl-[40px] pr-[36px] "
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5"
        />
        <img
          src={filterIcon}
          alt="Filter Icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
        />
      </div>
      <div className="w-full flex ">
        <button
          onClick={() => {
            setSortOrder("asc");
            setSortOrderFvaorite("asc");
          }}
          className={`px-4 py-[10px] rounded-lg border border-gray-300 bg-white mr-4 ${
            sortOrder === "asc" ? "bg-[#EEE3FF] text-[#8054C7] mr-4" : ""
          }`}
        >
          order A-Z
        </button>
        <button
          onClick={() => {
            setSortOrder("desc");
            setSortOrderFvaorite("desc");
          }}
          className={`px-4 py-[10px] rounded-lg border border-gray-300 bg-white mr-4  ${
            sortOrder === "desc" ? "bg-[#EEE3FF] text-[#8054C7] mr-4" : ""
          }`}
        >
          order Z-A
        </button>
      </div>

      {/* Starred Characters Section */}
      {favoriteCharacters.length > 0 && (
        <div className="mt-6">
          <h3 className="text-[#6B7280] mb-2">
            Starred Characters ({favoriteCharacters.length})
          </h3>

          <ul className="divide-y divide-gray-200">
            {favoriteCharacters.map((character) => (
              <ItemList
                key={character.id}
                character={character}
                icon={heartGreenIcon}
                buttonOnclick={() => deletedToFavorites(character)}
                cardOnclick={() => viewAllInfo(character.id)}
                isActive={Number(activeCharacterId) === Number(character.id)}
              />
            ))}
          </ul>
        </div>
      )}

      {/* All Characters Section */}
      <div className="mt-6">
        <h3 className="text-[#6B7280] mb-2">
          Characters ({characters.length})
        </h3>
        <ul className="divide-y divide-gray-200">
          {characters.map((character) => (
            <ItemList
              key={character.id}
              character={character}
              icon={heartGreyIcon}
              buttonOnclick={() => addToFavorites(character)}
              cardOnclick={() => viewAllInfo(character.id)}
              isActive={Number(activeCharacterId) === Number(character.id)}
            />
          ))}
        </ul>
      </div>
    </aside>

    {/* Main Content - Characters Grid */}
    <div className="flex-grow">{children}</div>
  </div>
);

export default NavbarComponent;
