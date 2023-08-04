import { Especie } from "./Especie";
import { Nave } from "./Nave";
import { Personagem } from "./Personagem";
import { Planeta } from "./Planeta";
import { Veiculo } from "./Veiculo";

export interface Filme{
  characters: string[] | Personagem[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[] | Planeta[];
  producer: string;
  release_date: Date;
  species: string[] | Especie[];
  starships: string[] | Nave[];
  title: string;
  url: string;
  vehicles: string[] | Veiculo[];
}