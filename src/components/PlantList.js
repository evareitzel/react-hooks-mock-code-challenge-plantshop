import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const renderPlants = plants.map(plant => {
      return <PlantCard image={plant.image} name={plant.name} price={plant.price} key={plant.name}/>
    })

  return (
    <ul className="cards">{/* render PlantCards components in here */}
    {renderPlants}</ul>
  );
}

export default PlantList;
