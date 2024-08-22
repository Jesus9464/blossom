import React, { useState, Dispatch, SetStateAction } from "react";
import { Character } from "../../../common/types";
import ItemList from "../../shared/components/ItemList";
import searchIcon from "../../../assets/icons/search-icon.svg";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import heartGreenIcon from "../../../assets/icons/heart-green-icon.svg";
import heartGreyIcon from "../../../assets/icons/heart-grey-icon.svg";
import SearchInput from "./SearchInput";

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
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  onFilterChange: (filterType: string, filterValue: string) => void;
  characterFilter: string;
  isHome: boolean;
  isMobile: boolean;
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
  searchTerm,
  setSearchTerm,
  onFilterChange,
  characterFilter,
  isHome,
  isMobile,
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  const handleGoBack = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
      {(!isMobile || (isMobile && isHome)) && ( // Mostrar lista solo en móvil en Home
        <aside className="w-full md:w-[600px] bg-gray-50 p-4 shadow-lg md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <h2 className="text-primary-600 font-bold text-xl mb-4">
            Rick and Morty List
          </h2>

          <SearchInput
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            filterIcon={filterIcon}
            searchIcon={searchIcon}
            onFilterChange={onFilterChange}
          />
          <div className="w-full flex ">
            <button
              onClick={() => {
                setSortOrder("asc");
                setSortOrderFvaorite("asc");
              }}
              className={`px-4 py-[10px] rounded-lg border border-gray-300  mr-4 ${
                sortOrder === "asc" ? "bg-[#EEE3FF] text-[#8054C7] mr-4" : ""
              }`}
            >
              Order A-Z
            </button>
            <button
              onClick={() => {
                setSortOrder("desc");
                setSortOrderFvaorite("desc");
              }}
              className={`px-4 py-[10px] rounded-lg border border-gray-300  mr-4  ${
                sortOrder === "desc" ? "bg-[#EEE3FF] text-[#8054C7] mr-4" : ""
              }`}
            >
              Order Z-A
            </button>
          </div>

          {favoriteCharacters.length > 0 && characterFilter !== "Others" && (
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
                    isActive={
                      Number(activeCharacterId) === Number(character.id)
                    }
                  />
                ))}
              </ul>
            </div>
          )}

          {characterFilter !== "Starred" && (
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
                    isActive={
                      Number(activeCharacterId) === Number(character.id)
                    }
                  />
                ))}
              </ul>
            </div>
          )}
        </aside>
      )}

      <div className={`flex-grow ${isMobile ? "relative" : ""}`}>
        {selectedCharacter ? (
          <div className="absolute inset-0 bg-white p-4 z-50">
            <button onClick={handleGoBack} className="mb-4">
              Go Back
            </button>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
