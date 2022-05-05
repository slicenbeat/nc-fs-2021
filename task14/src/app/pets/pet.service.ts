import { Injectable } from "@angular/core";
import Pet from "./models/pet.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PetService {
    constructor(private http: HttpClient) {

    }
    private data: Pet[] = [
        { id: 1, petName: "Живоглотик", petType: "Коты", sex: "Мужской", legsCount: 4, gachiMasterName: "Гермиона" },
        { id: 2, petName: "Факир", petType: "Собаки", sex: "Мужской", legsCount: 4, gachiMasterName: "Амина" },
        { id: 3, petName: "Леон", petType: "Собаки", sex: "Мужской", legsCount: 4, gachiMasterName: "Амина" },
        { id: 4, petName: "Короста", petType: "Крысы", sex: "Мужской", legsCount: 4, gachiMasterName: "Рон" },
    ]

    getPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>('http://localhost:3000/pets');
    }
    getPetById(id: number) {
        return this.http.get<Pet>('http://localhost:3000/pets/' + id);
    }

    updatePet(pet: Pet) {
        return this.http.put<Pet>(`http://localhost:3000/pets/${pet.id}`, pet)
    }
    deletePet(pet: Pet) {
        return this.http.delete<Pet>(`http://localhost:3000/pets/${pet.id}`)
    }

    addPet(pet: Pet){
        return this.http.post<Pet>(`http://localhost:3000/pets/`, pet)
    }
}