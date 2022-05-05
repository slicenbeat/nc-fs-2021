import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetsEditComponent } from './pets-edit/pets-edit.component';

@NgModule({
  declarations: [ PetsEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PetsEditComponent]
})
export class WindowsModule { }
