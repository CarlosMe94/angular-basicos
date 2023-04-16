import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DBZService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  nuevo : Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }

  constructor() {
  }


}
