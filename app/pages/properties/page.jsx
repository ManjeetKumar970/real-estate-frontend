"use client";

import { useEffect, useState } from "react";
import { getProperties } from "../../services/api";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then(res => {
      setProperties(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Properties</h1>

      {properties.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.city}</p>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}