export interface PokemonListModel {
  count: number;
  next: string | null;
  previous: null | string;
  results: PokemonSummaryModel[];
}

export interface PokemonSummaryModel {
  name: string;
  url: string;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  name: string;
  order: number;
  abilities: PokemonAbility[];
  past_types: string[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: string;
  weight: number;
}


export interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherSprites;
}

export interface OtherSprites {
  dream_world: { front_default: string };
  home: { front_default: string; front_shiny: string };
  "official-artwork": { front_default: string; front_shiny: string };
  showdown: { back_default: string; front_default: string };
}



export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource
}