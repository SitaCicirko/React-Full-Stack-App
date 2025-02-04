import { useState, useEffect } from "react";
import fetchTrails from "../lib/data";

export default function Content() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    async function loadTrails() {
      const data = await fetchTrails();
      setTrails(data);
    }
    loadTrails();
  }, []);

  return (
    <>
      <h2>Hiking Trails</h2>
      <ul>
        {trails.map((trail) => (
          <li key={trail.id}>
            {trail.name} - {trail.location}
          </li>
        ))}
      </ul>
    </>
  );
}
