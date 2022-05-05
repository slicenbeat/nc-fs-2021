import { PetsEditComponent } from './windows/pets-edit/pets-edit.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PetsListComponent } from "./pets/pets-list/pets-list.component";

const routes: Routes = [
    {path: '', component: PetsListComponent},
    {path: 'pet/:id', component: PetsEditComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}