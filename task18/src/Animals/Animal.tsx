import Pet from "./Pet";
import React from "react";
interface AnimalProps {
  pet: Pet;
  toggleInfo: (id: number) => void;
}

export const Animal: React.FC<AnimalProps> = ({ pet, toggleInfo }) => {
  return (
    <div className="animal-app__animal" onClick={() => toggleInfo(pet.id)}>
      {pet.isToggle
        ? `Кличка – ${pet.petName} Тип питомца – ${pet.petType} Количество ног – ${pet.legsCount} Имя хозяина – ${pet.gachiMasterName}`
        : `Кличка – ${pet.petName} Тип питомца – ${pet.petType}`}
    </div>
  );
};
