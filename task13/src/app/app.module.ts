import { PetService } from './pets/pet.service';
import { PetsModule } from './pets/pets.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
