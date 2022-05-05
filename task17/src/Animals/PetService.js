export default class PetService {
  #data = [
    {
      id: 1,
      petName: "Живоглотик",
      petType: "Коты",
      sex: "Мужской",
      legsCount: 4,
      gachiMasterName: "Гермиона",
      isToggle: false,
    },
    {
      id: 2,
      petName: "Факир",
      petType: "Собаки",
      sex: "Мужской",
      legsCount: 4,
      gachiMasterName: "Амина",
      isToggle: false,
    },
    {
      id: 3,
      petName: "Леон",
      petType: "Собаки",
      sex: "Мужской",
      legsCount: 4,
      gachiMasterName: "Амина",
      isToggle: false,
    },
    {
      id: 4,
      petName: "Короста",
      petType: "Крысы",
      sex: "Мужской",
      legsCount: 4,
      gachiMasterName: "Рон",
      isToggle: false,
    },
  ];

  get data(){
      return this.#data;
  }
}
