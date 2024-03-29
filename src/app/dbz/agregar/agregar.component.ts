import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 5000
  }

  constructor(private dbzService:DBZService) {}

  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo)

    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
