import React, { useEffect, useState } from "react";

const LostItems = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    setLostItems(storedItems);
  }, []);

  const handleClaim = (id) => {
    const updatedItems = lostItems.filter((item) => item.id !== id); // Remove claimed item
    setLostItems(updatedItems);
    localStorage.setItem("lostItems", JSON.stringify(updatedItems));
    {alert("Happy to help you reunite with your lost item !")}
  };

  const handleDelete = (id) => {
    const updatedItems = lostItems.filter((item) => item.id !== id); // Remove item permanently
    setLostItems(updatedItems);
    localStorage.setItem("lostItems", JSON.stringify(updatedItems));
    {alert("item removed from list!")}
  };

  return (
    <div class="listItems">
      <h2>Lost Items</h2>
      <ul>
        {lostItems.length === 0 ? <p>No lost items reported yet.</p> :
          lostItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{"contact at: "+item.contact}</p>
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

export default LostItems;