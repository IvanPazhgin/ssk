import Select from 'react-select';
import { uniqBy } from 'lodash';
import {data} from "../fakeStorage/data";

function Filters({ selectedType, selectedCity, handleTypeChange, handleCityChange }) {
// Получаем список уникальных типов объектов и городов из данных
  const types = uniqBy(data, 'type').map((item) => ({ value: item.type, label: item.type }));
  const cities = uniqBy(data, 'city').map((item) => ({ value: item.city, label: item.city }));

  return (
    <div className="Filters">
      <Select
        value={selectedType}
        options={types}
        onChange={handleTypeChange}
        placeholder="Выберите тип объекта"
      />
      <Select
        value={selectedCity}
        options={cities}
        onChange={handleCityChange}
        placeholder="Выберите город"
      />
    </div>
  );
}

export default Filters