import React, { useState, useEffect, useRef } from "react";

const ReportFound = () => {
  const [foundItems, setFoundItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      description,
      location,
      image,
    };
    const updatedItems = [...foundItems, newItem];
    setFoundItems(updatedItems);
    localStorage.setItem("foundItems", JSON.stringify(updatedItems));
    {
      alert("Found report submitted successfully!!!");
    }
    {
      setItemName("");
      setDescription("");
      setLocation("");
      setImage("");
      fileInputRef.current.value = null;
    }
  };
  const fileInputRef = useRef();
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("FoundItems")) || [];
    setFoundItems(storedItems);
  }, []);

  // Convert image file to base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await toBase64(file);
      setImage(base64);
    }
  };

  return (
    <div className="report">
      <h2>Report a Found Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button onClick={handleAddItem}>Submit</button>
    </div>
  );
};

export default ReportFound;
