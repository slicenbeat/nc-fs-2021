export default function Animal({ pet, toggleInfo }) {
  return (
    <div className="animal-app__animal" onClick={() => toggleInfo(pet.id)}>
      {pet.isToggle
        ? `Кличка – ${pet.petName} Тип питомца – ${pet.petType} Количество ног – ${pet.legsCount} Имя хозяина – ${pet.gachiMasterName}`
        : `Кличка – ${pet.petName} Тип питомца – ${pet.petType}`}
    </div>
  );
}
