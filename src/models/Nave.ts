import { Filme } from "./Filme";
import { Personagem } from "./Personagem";

export interface Nave{
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[] | Filme[];
  pilots: string[] | Personagem[];
  starship_class: string;
  url: string;
}