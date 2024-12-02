// src/components/CRUD.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CRUD = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Example API call, replace with your API endpoint
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);
  
  return (
    <div>
      <h2>CRUD Operations</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
