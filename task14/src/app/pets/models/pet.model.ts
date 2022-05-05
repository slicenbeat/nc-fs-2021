export default class Pet {
    id: number;
    petType: string;
    petName: string;
    sex: string;
    legsCount: number;
    gachiMasterName: string;
    constructor(id: number, petName: string, petType: string, sex: string, legsCount: number, gachiMasterName: string) {
        this.id = id;
        this.petName = petName;
        this.petType = petType;
        this.sex = sex;
        this.legsCount = legsCount;
        this.gachiMasterName = gachiMasterName;
    }

}