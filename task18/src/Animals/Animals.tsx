import React from "react";
import { Animal } from "./Animal";
import Pet from "./Pet";
import { ThemeContext } from "./ThemeContext";

interface AnimalsProps {
  changeToggle: () => void;
  pets: Pet[];
  toggleCat: boolean;
  onToggle: (id: number) => void;
  toggleDark: () => void;
  isDark: boolean;
}
export const Animals: React.FC<AnimalsProps> = ({
  changeToggle,
  pets,
  toggleCat,
  onToggle,
  toggleDark,
  isDark,
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      className="animal-app"
      style={
        isDark
          ? {
              background: theme.dark.background,
              color: theme.dark.color,
            }
          : {
              background: theme.light.background,
              color: theme.light.color,
            }
      }
    >
      <div className="animal-app__animals">
        {pets.map((pet) => {
          if ((toggleCat && pet.petType === "Коты") || pet.petType !== "Коты") {
            return <Animal pet={pet} key={pet.id} toggleInfo={onToggle} />;
          } else return null;
        })}
      </div>
      <button className="animal-app__button" onClick={() => changeToggle()}>
        {toggleCat ? "Скрыть котиков" : "Показать котиков"}
      </button>
      <button onClick={toggleDark}>Изменить тему</button>
    </div>
  );
};
