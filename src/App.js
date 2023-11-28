// src/App.js
import React, { useState, useEffect } from "react";
import ParkingSlot from "./components/ParkingSlot";
import database from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const App = () => {
  const [slotData, setSlotData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const db = getDatabase();
      const starCountRef = ref(db, "parking");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setSlotData(data);
        console.log(data);
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Smart Car Parking System</h1>
      <div style={{ display: "flex" }}>
        <ParkingSlot slotId={1} isOccupied={slotData[1]} />
        <ParkingSlot slotId={2} isOccupied={slotData[2]} />
        <ParkingSlot slotId={3} isOccupied={slotData[3]} />
        <ParkingSlot slotId={4} isOccupied={slotData[4]} />
      </div>
    </div>
  );
};

export default App;
