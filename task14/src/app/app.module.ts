import { AppRoutingModule } from './app-routing.module';
import { PetsViewComponent } from './pets/pets-view/pets-view.component';
import { PetService } from './pets/pet.service';
import { PetsModule } from './pets/pets.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WindowsModule } from './windows/windows.module';
import { Routes, RouterModule } from '@angular/router';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: '/pets/:id', component: PetsViewComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetsModule,
    WindowsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
