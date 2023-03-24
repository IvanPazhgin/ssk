function Gallery({ items }) {
  return (
    <div className="Gallery">
      {items.map((item) => (
        <div key={item.id} className="Gallery-item">
          <h3 style={{margin: 0}}>Объект: {item.name}</h3>
          <div><strong>Тип здания:</strong> {item.type}</div>
          <div><strong>Город:</strong> {item.city}</div>
          <div><strong>Продукция:</strong> {item.product}</div>
          <div><strong>Объем:</strong> {item.volume}</div>
          <div><strong>Поставщик:</strong> {item.provider}</div>
          <img
            src={`/assets/${item.photo}`}
            alt={item.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
      {/* Add empty items to fill the grid */}
      {Array.from({ length: 4 - (items.length % 4) }).map((_, index) => (
        <div key={index} className="Gallery-item empty"></div>
      ))}
    </div>
  );
}

export default Gallery;