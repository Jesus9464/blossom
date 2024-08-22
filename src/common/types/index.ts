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

export interface CharacterDetails {
  id: string;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: Array<{
    name: string;
  }>;
}
