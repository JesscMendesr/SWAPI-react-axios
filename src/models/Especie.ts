import { Filme } from "./Filme";
import { Personagem } from "./Personagem";
import { Planeta } from "./Planeta";

export interface Especie{
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string | Planeta;
  language: string;
  name: string;
  people: string[] | Personagem[];
  films: string[] | Filme[];
  skin_colors: string;
  url: string;
}