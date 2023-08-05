import { Especie } from "./Especie";
import { Filme } from "./Filme";
import { Nave } from "./Nave";
import { Planeta } from "./Planeta";
import { Veiculo } from "./Veiculo";


export interface Personagem{
  birth_year: string;
  eye_color: string;
  films: string[] | Filme[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string | Planeta;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[] | Especie[];
  starships: string[] | Nave[];
  url: string;
  vehicles: string[] | Veiculo[];
}