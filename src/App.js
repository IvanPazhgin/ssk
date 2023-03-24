import './App.css';
import {useState} from "react";
import {data} from "./fakeStorage/data";
import Gallery from "./components/gallery";
import Filters from "./components/filters";

function App() {
  const [selectedType, setSelectedType] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const getFilteredItems = () => {
    let filteredItems = [...data];

    if (selectedType) {
      filteredItems = filteredItems.filter((item) => item.type === selectedType.value);
    }

    if (selectedCity) {
      filteredItems = filteredItems.filter((item) => item.city === selectedCity.value);
    }

    return filteredItems;
  };

  return (
    <div className="App">
      <Filters
        selectedType={selectedType}
        selectedCity={selectedCity}
        handleTypeChange={handleTypeChange}
        handleCityChange={handleCityChange}
      />
      <Gallery items={getFilteredItems()} />
    </div>
  );
}

export default App;
