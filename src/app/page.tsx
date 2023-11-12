"use client";
import { useState } from "react";

export default function Home() {
  const [alreadyPicked, setAlreadyPicked] = useState([
    "Joakim",
    "Kristian",
    "Victor",
  ]);
  const [pickable, setPickable] = useState(["Sven", "Gunde", "Bert"]);
  const [pickedItem, setpickedItem] = useState("");
  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * pickable.length);
    const randomItem = pickable[randomIndex];
    if (randomItem === pickedItem) {
      randomize();
      return;
    }
    setpickedItem(randomItem);
    // const newPickable = pickable.filter((item) => item !== pickedItem);
    // setPickable(newPickable);
    // setAlreadyPicked([...alreadyPicked, pickedItem]);
  };

  return (
    <>
      <div className="mx-10 flex justify-between">
        <div>
          <h2>Already picked:</h2>
          <ul>
            {alreadyPicked.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-row place-items-end">
            <button
              type="button"
              className="m-0 rounded border border-gray-400 bg-white px-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
              onClick={randomize}
            >
              Randomize
            </button>

            <div
              style={{ transition: "all 5s ease-in-out" }}
              className="flex animate-pulse flex-row"
            >
              <span className="uppercase">{pickedItem}</span>
            </div>
          </div>
        </div>
        <div>
          <h2>Pickable</h2>
          <ul>
            {pickable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
