// src/components/ParkingSlot.js
import React, { useEffect, useState } from "react";

const ParkingSlot = ({ slotId, isOccupied }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        margin: "10px",
        backgroundColor: isOccupied ? "red" : "green",
      }}
    >
      {slotId}
    </div>
  );
};

export default ParkingSlot;
