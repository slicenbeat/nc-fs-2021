import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PetService } from '../pet.service';
import Pet from '../models/pet.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.less']
})


export class PetsListComponent implements OnInit {
  pets: Pet[];
  error: any;
  pet: Pet = { id: 0, petName: "", petType: "", sex: "", legsCount: 0, gachiMasterName: "" };
  constructor(private service: PetService, private router: Router) {
    service.getPets().subscribe(resp => {
      this.pets = resp
    }, error => {
      this.error = error.message;
      alert(this.error);
    }
    );
  }

  ngOnInit(): void {
  }
  buttonName = "Скрыть котиков";
  toggleCat = true;
  addCatFlag = true;

  toggleCats(): void {
    this.toggleCat = !this.toggleCat;
    if (this.buttonName === "Скрыть котиков") {
      this.buttonName = "Показать котиков";
    }
    else this.buttonName = "Скрыть котиков";
  }
  changeAddCat() {
    this.addCatFlag = !this.addCatFlag;
  }

  addCat(form: NgForm) {
    this.service.addPet(form.value).subscribe(data => {
      console.log(data)
    },
      error => {
        this.error = error.message;
        alert(this.error);
      });
    window.location.reload();
  }

  onChanged(increased: boolean) {
    if (increased === true) {
      alert("Произошел клик по питомцу…");
    }
  }

}
