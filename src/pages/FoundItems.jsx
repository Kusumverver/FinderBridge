import React, { useEffect, useState } from "react";

const FoundItems = () => {
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("foundItems")) || [];
    setFoundItems(storedItems);
  }, []);

  const handleClaim = (id) => {
    const updatedItems = foundItems.filter((item) => item.id !== id); // Remove claimed item
    setFoundItems(updatedItems);
    localStorage.setItem("foundItems", JSON.stringify(updatedItems));
    {alert("Glad we could help you find it!")}
  };

  const handleDelete = (id) => {
    const updatedItems = foundItems.filter((item) => item.id !== id); // Remove item permanently
    setFoundItems(updatedItems);
    localStorage.setItem("foundItems", JSON.stringify(updatedItems));
    {alert("Item removed from list!")}
  };
  return (
    <div class="listItems">
      <h2>Found Items</h2>
      <ul>
        {foundItems.length === 0 ? <p>No found items reported yet.</p> :
          foundItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{"found at : "+ item.location}</p>
              {item.image && <img src={item.image} alt={item.name} />}<br/>
              <button onClick={() => handleClaim(item.id)}>✅ Claim</button>
              <button onClick={() => handleDelete(item.id)}>❌ Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FoundItems;