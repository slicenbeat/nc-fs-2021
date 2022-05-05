import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PetService } from '../pet.service';
import Pet from '../models/pet.model';
@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.less']
})


export class PetsListComponent implements OnInit {
  pets: Pet[];
  constructor(private service: PetService) {
    this.pets = service.getData();
  }

  ngOnInit(): void {
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

  onChanged(increased: boolean) {
    if (increased === true) {
      alert("Произошел клик по питомцу…");
    }
  }

}
