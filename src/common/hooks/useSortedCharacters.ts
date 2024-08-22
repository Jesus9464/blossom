import { useState, useMemo } from "react";

import { Character } from "../types";

type SortOrder = "asc" | "desc";

const useSortedCharacters = (
  characters: Character[],
  initialSortOrder: SortOrder = "asc"
) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialSortOrder);

  const sortedCharacters = useMemo(() => {
    return [...characters].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name); // order from A to Z
      } else {
        return b.name.localeCompare(a.name); // order from Z to A
      }
    });
  }, [characters, sortOrder]);

  return {
    sortedCharacters,
    sortOrder,
    setSortOrder,
  };
};

export default useSortedCharacters;
