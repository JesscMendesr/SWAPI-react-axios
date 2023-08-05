import { Filme } from "./Filme";
import { Personagem } from "./Personagem";

export interface Planeta{
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[] | Filme[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[] | Personagem[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}