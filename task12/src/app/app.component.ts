import PetService  from './pet.service';
import { Component } from '@angular/core';
import Pet from './models/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pets: Pet[];
  
  constructor(private service: PetService){
    this.pets = service.getData();
  }
  buttonName = "Скрыть котиков";
  toggleCat = true;

  
  toggleCats(): void {
    this.toggleCat = !this.toggleCat;
    if (this.buttonName === "Скрыть котиков") {
      this.buttonName = "Показать котиков";
    }
    else this.buttonName = "Скрыть котиков";
  }

  toggleInfo(pet: Pet) {
    pet.isToggle = !pet.isToggle;
  }

}
