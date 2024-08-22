export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface CharactersData {
  characters: {
    results: Character[];
  };
}
