import { PetService } from 'src/app/pets/pet.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Pet from 'src/app/pets/models/pet.model';
import { Params } from '@angular/router';


@Component({
  selector: 'app-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['./pets-edit.component.css']
})
export class PetsEditComponent implements OnInit {

  myForm: FormGroup;
  pet: Pet;
  formReady = false;
  error: any;
  constructor(private route: ActivatedRoute, private router: Router, private petService: PetService) {

  }
  submit() {
    this.petService.updatePet(this.myForm.value).subscribe(data => {
      console.log(data)
    },
      error => {
        this.error = error.message;
        alert(this.error);
      });
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.petService.getPetById(+params.id).subscribe(resp => {
        this.pet = resp;
        this.myForm = new FormGroup({
          id: new FormControl(this.pet.id),
          petName: new FormControl(this.pet.petName, [Validators.required, Validators.minLength(2)]),
          petType: new FormControl(this.pet.petType, [Validators.required, Validators.minLength(4)]),
          sex: new FormControl(this.pet.sex, [Validators.required, Validators.minLength(7)]),
          legsCount: new FormControl(this.pet.legsCount, [Validators.required, Validators.min(0), Validators.max(4)]),
          gachiMasterName: new FormControl(this.pet.gachiMasterName, [Validators.required, Validators.minLength(2)])
        });
      },
        error => {
          this.error = error.message;
          alert(this.error);
          this.router.navigate(['/']);
        });
    })
  }
  deletePetFunction() {
    this.petService.deletePet(this.pet).subscribe(data => {
      console.log(data)
    },
      error => {
        this.error = error.message;
        alert(this.error);
      });
    this.router.navigate(['/']);
  }

}
