"use client";

import React, { useState } from "react";
import Rating from "react-star-rating-component";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (nextValue) => {
    setRating(nextValue);
  };

  return (
    <div>
      <Rating
        value={rating}
        onStarClick={handleStarClick}
        starCount={5}
        starColor={"#ffb400"}
        emptyStarColor={"#ccc"}
      />
    </div>
  );
}

export default StarRating;
