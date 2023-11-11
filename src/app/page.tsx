"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [alreadyPicked, setAlreadyPicked] = useState(["Joakim", "Kristian", "Victor"]);
  const [pickable, setPickable] = useState(["Sven", "Gunde", "Bert"]);

  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * pickable.length);
    const pickedItem = pickable[randomIndex];
    const newPickable = pickable.filter((item) => item !== pickedItem);
    setPickable(newPickable);
    setAlreadyPicked([...alreadyPicked, pickedItem]);
  };

  return (
    <>
      <div className="flex justify-between mx-10">
        <div>
          <h2>Already picked:</h2>
          <ul>
            {alreadyPicked.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={randomize}>Randomize </button>
          </div>
        </div>
        <div>
          <h2>Pickable</h2>
          <ul>
            {pickable.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
