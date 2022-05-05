import React from "react";
import Animals from "./Animals/Animals";
import PetService from "./Animals/PetService";

export default function App() {
  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    setPets(new PetService().data);
  }, []);
  let [toggleCat, setToggleCat] = React.useState(true);
  function handleToggleInfo(id) {
    setPets(
      pets.map((pet) => {
        if (pet.id === id) {
          pet.isToggle = !pet.isToggle;
        }
        return pet;
      })
    );
  }

  function handleChangeToggle() {
    setToggleCat(!toggleCat);
  }

  return (
    <Animals
      changeToggle={handleChangeToggle}
      toggleCat={toggleCat}
      pets={pets}
      onToggle={handleToggleInfo}
    />
  );
}
