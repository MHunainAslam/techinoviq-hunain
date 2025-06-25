export type Pokemon = {
    id: number;
    name: string;
    image: string;
    types: string[];
    base_experience: number;
  };
  
  export type Team = {
    id: string;
    name: string;
    pokemons: Pokemon[];
  };
  