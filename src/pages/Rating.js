import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];
const Rating = ({ totalStars = 5 }) => {
  const [stars, setStars] = useState(0);
  const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? "yellow" : "gray"} onClick={onSelect} />
  );
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={stars > i} onSelect={() => setStars(i + 1)} />
      ))}
      <p>
        {stars} of {totalStars} stars
      </p>
    </>
  );
};

export default Rating;
