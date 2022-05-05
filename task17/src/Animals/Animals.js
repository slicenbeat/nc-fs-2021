import React from "react";
import Animal from "./Animal";

export default function Animals({ onToggle, pets, toggleCat, changeToggle }) {
  return (
    <div className="animal-app">
      <div className="animal-app__animals">
        {pets.map((pet) => {
          if ((toggleCat && pet.petType === "Коты") || pet.petType !== "Коты") {
            return <Animal pet={pet} key={pet.id} toggleInfo={onToggle} />;
          } else return null;
        })}
      </div>
      <button className="animal-app__button" onClick={changeToggle}>
        {toggleCat ? "Скрыть котиков" : "Показать котиков"}
      </button>
    </div>
  );
}
