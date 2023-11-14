"use client";
import React, { useState } from "react";
import WheelComponent from "../_components/WheelComponent";

export default function About() {
  const [pickedNames, setPickedNames] = useState<string[]>([]);
  const [pickableNames, setPickableNames] = useState<string[]>([
    "1",
    "2",
    "3",
    "4",
  ]);
  const [key, setKey] = useState(1);
  const [firstSpin, setFirstSpin] = useState(true);

  const onFinished = (pickedName: string) => {
    // setFirstSpin((prevFirstSpin) => {
    //   console.log("onFinished firstSpin", String(prevFirstSpin));
  
    //   if (!prevFirstSpin) {
    //     setKey((prevKey) => prevKey + 1);
    //     console.log("onFinished !firstSpin");
    //   }
  
    //   return false; // set the new value of firstSpin
    // });

    setPickableNames((prevPickedNames) => {
      const newPickableNames = prevPickedNames.filter(
        (item) => item !== pickedName,
      );
      return [...newPickableNames];
    });

    setPickedNames((prevPickedNames) => [...prevPickedNames, pickedName]);
  };

  return (
    <>
      <WheelComponent
        key={key}
        rerender={key}
        segments={pickableNames}
        segColors={["#34A24F"]}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="white"
        contrastColor="black"
        buttonText="Spin"
        isOnlyOnce={false}
        size={200}
        upDuration={100}
        downDuration={500}
      />
      <p>first spin: {String(firstSpin)}</p>
      <p>key: {key}</p>
      <div className="flex flex-row gap-5">
        <div>
          Pickable names:
          <ul>
            {pickableNames.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          Picked names:
          <ul>
            {pickedNames.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
