import { Injectable } from "@angular/core";
import Pet from "./models/pet.model";

@Injectable()
export default class PetService {
    private data: Pet[] = [
        { petName: "Живоглотик", petType: "Коты", sex: "Мужской", legsCount: 4, gachiMasterName: "Гермиона", isToggle: false },
        { petName: "Факир", petType: "Собаки", sex: "Мужской", legsCount: 4, gachiMasterName: "Амина", isToggle: false },
        { petName: "Леон", petType: "Собаки", sex: "Мужской", legsCount: 4, gachiMasterName: "Амина", isToggle: false },
        { petName: "Короста", petType: "Крысы", sex: "Мужской", legsCount: 4, gachiMasterName: "Рон", isToggle: false },
    ]

    getData(): Pet[] {
        return this.data;
    }
}