import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LostItems from "./LostItems";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [filteredLost, setFilteredLost] = useState([]);
  const [filteredFound, setFilteredFound] = useState([]);

  useEffect(() => {
    const storedLost = JSON.parse(localStorage.getItem("lostItems")) || [];
    const storedFound = JSON.parse(localStorage.getItem("foundItems")) || [];
    setLostItems(storedLost);
    setFoundItems(storedFound);
  }, []);

  const handleSearch = () => {
    const lowerQuery = searchQuery.toLowerCase();
    setFilteredLost(
      lostItems.filter((item) => item.name.toLowerCase().includes(lowerQuery))
    );
    setFilteredFound(
      foundItems.filter((item) => item.name.toLowerCase().includes(lowerQuery))
    );
  };

  return (
    <div className="home-container">
      <header>
        <h1>
          Finder Bridge <p>Connecting finders and owners...</p>
        </h1>

        <p>Your trusted lost-and-found companion!</p>
      </header>

      <div className="buttons">
        <Link to="/report-lost">
          <button className="lost-btn">Report Lost Item</button>
        </Link>
        <Link to="/report-found">
          <button className="found-btn">Report Found Item</button>
        </Link>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search lost & found items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        <div className="list">
          <h3>Lost Items:</h3>
          <ul>
            {filteredLost.length === 0 ? (
              <p>No matching lost items found.</p>
            ) : (
              filteredLost.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> - {item.description}
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="list">
          <h3>Found Items:</h3>
          <ul>
            {filteredFound.length === 0 ? (
              <p>No matching found items.</p>
            ) : (
              filteredFound.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> - {item.description}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
