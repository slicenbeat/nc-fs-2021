import React from "react";
import { Animals } from "./Animals/Animals";
import PetService from "./Animals/PetService";
import Pet from "./Animals/Pet";
import { ThemeContext } from "./Animals/ThemeContext";
import { contextDefaultValues } from "./Animals/ThemeContext";

export default function App() {
  const [pets, setPets] = React.useState<Pet[]>([]);
  React.useEffect(() => {
    setPets(new PetService().data);
  }, []);
  let [toggleCat, setToggleCat] = React.useState(true);

  const handleChangeToggle = React.useCallback(() => {
    setToggleCat(!toggleCat);
  }, [toggleCat]);

  function handleToggleInfo(id: number) {
    setPets(
      pets.map((pet) => {
        if (pet.id === id) {
          pet.isToggle = !pet.isToggle;
        }
        return pet;
      })
    );
  }

  const [isDark, setIsDark] = React.useState(false);
  const handleToggleDark = React.useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={contextDefaultValues}>
      <Animals
        changeToggle={handleChangeToggle}
        toggleCat={toggleCat}
        pets={pets}
        onToggle={handleToggleInfo}
        toggleDark={handleToggleDark}
        isDark={isDark}
      />
    </ThemeContext.Provider>
  );
}
