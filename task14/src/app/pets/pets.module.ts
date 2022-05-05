import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsViewComponent } from './pets-view/pets-view.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    PetsListComponent,
    PetsViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:
    [PetsListComponent]
})
export class PetsModule { }
