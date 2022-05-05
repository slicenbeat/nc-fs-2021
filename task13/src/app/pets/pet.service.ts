import { Injectable } from "@angular/core";
import Pet from "./models/pet.model";

@Injectable()
export class PetService {
    private data: Pet[] = [
        { petName: "Живоглотик", petType: "Коты", sex: "Мужской", legsCount: 4, gachiMasterName: "Гермиона"},
        { petName: "Факир", petType: "Собаки", sex: "Мужской", legsCount: 4, gachiMasterName: "Амина"},
        { petName: "Леон", petType: "Собаки", sex: "Мужской", legsCount: 4, gachiMasterName: "Амина"},
        { petName: "Короста", petType: "Крысы", sex: "Мужской", legsCount: 4, gachiMasterName: "Рон"},
    ]

    getData(): Pet[] {
        return this.data;
    }
}