import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DBZService {

  private _personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    }
  ]

  constructor() {
  }

  get personajes(): Personaje[] {
    return [...this._personajes]
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje)
  }
}
