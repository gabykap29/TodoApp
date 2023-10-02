import React, { useState } from "react";

export const ViewTodos = ({ todos }) => {
  const [clickedCards, setClickedCards] = useState({});

  const handleCardClick = (index) => {
    // Copia del estado actual de las tarjetas clickeadas
    const updatedClickedCards = { ...clickedCards };

    // Cambiar el estado de la tarjeta en función del índice
    updatedClickedCards[index] = !updatedClickedCards[index];

    // Actualizar el estado de las tarjetas clickeadas
    setClickedCards(updatedClickedCards);
  };

  if (!todos || todos.length === 0) {
    return <p>Aquí se verán Todos cargados!</p>;
  }

  return (
    <div>
      {todos.map((item, index) => (
        <div
          key={index}
          className={`alert alert-warning${
            clickedCards[index] ? " bg-success" : ""
          }`}
          role="alert"
          onClick={() => handleCardClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};


