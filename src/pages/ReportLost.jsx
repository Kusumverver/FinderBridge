import React, { useState, useEffect, useRef } from "react";
import "./Report.css";

const ReportLost = () => {
  const [lostItems, setLostItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);
  
  const fileInputRef = useRef();
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    setLostItems(storedItems);
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

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      description,
      contact,
      image,
    };
    const updatedItems = [...lostItems, newItem];
    setLostItems(updatedItems);
    localStorage.setItem("lostItems", JSON.stringify(updatedItems));
    {
      alert("Lost report submitted successfully!!!");
    }
    {
      setItemName("");
      setDescription("");
      setContact("");
      setImage("");
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="report">
      <h2>Report a Lost Item</h2>
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
        placeholder="contact info "
        onChange={(e) => setContact(e.target.value)}
      />
      {/* <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} /> */}
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

export default ReportLost;
