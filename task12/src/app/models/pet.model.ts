export default class Pet {
    petType: string;
    petName: string;
    sex: string;
    legsCount: number;
    gachiMasterName: string;
    isToggle = false;
    constructor(petName: string, petType: string, sex: string, legsCount: number, gachiMasterName: string) {
        this.petName = petName;
        this.petType = petType;
        this.sex = sex;
        this.legsCount = legsCount;
        this.gachiMasterName = gachiMasterName;
    }

}