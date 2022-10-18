import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantData => setPlants(plantData))
  }, [])

  function handleAddPlant(newPlant){
    console.log('In PlantPage: ', newPlant)
    setPlants([...plants, newPlant])
  }

    console.log(search)
    const filtered = plants.filter(plants =>plants.name.toLowerCase().includes(search))

    console.log(filtered)

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={filtered} />
    </main>
  );
}

export default PlantPage;
