import React, { useState, useEffect, useRef } from "react";

function Ass1() {
  const [color, setColor] = useState("#ff0000"); // current color
  const [favorites, setFavorites] = useState([]); // saved colors
  const colorInputRef = useRef(null);

  // Load favorites from localStorage on first render
  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedColors);
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = () => {
    if (!favorites.includes(color)) {
      setFavorites([...favorites, color]);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎨 Color Changer App</h2>

      {/* Box */}
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          borderRadius: "10px",
          backgroundColor: color,
          border: "2px solid #333",
        }}
      />

      {/* Color Picker */}
      <input
        type="color"
        value={color}
        ref={colorInputRef}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={addFavorite} style={{ marginLeft: "10px" }}>
        Save to Favorites
      </button>

      {/* Favorite Colors List */}
      <h3>Favorites</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        {favorites.map((fav, index) => (
          <div
            key={index}
            onClick={() => setColor(fav)}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: fav,
              border: "2px solid #000",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Ass1;