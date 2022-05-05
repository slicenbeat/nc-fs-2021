import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsViewComponent } from './pets-view/pets-view.component';



@NgModule({
  declarations: [
    PetsListComponent,
    PetsViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
    [PetsListComponent]
})
export class PetsModule { }
