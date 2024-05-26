import React from "react";
import { IoIosClose } from "react-icons/io";
import PraiseButtons from "./PraiseButtons";
import StarRating from "./Star";
import YesNoComponent from "./YesNoComponent";

const Navbar: React.FC = () => {
  const praises = [
    "Good Service",
    "On Time",
    "Good Driving",
    "Safe",
    "Staff Behavior",
    "Cleanliness",
    "Value for Money",
  ];
  return (
    <div
      className="flex flex-col p-5 text-black rounded-lg text-2xl"
      style={{
        backgroundColor: "white",
      }}
    >
      <div style={{ transform: "translate(-5%,-50%)" }}>
        <IoIosClose size={36} />
      </div>
      <div className="text-3xl mb-3">Leave a review</div>

      <div className="mt-2">Safety</div>
      <div style={{ color: "gray", fontSize: "0.8rem" }}>
        How safe did you feel during the journey?
      </div>
      <div className="text-3xl">
        <StarRating />
      </div>
      <div className="mt-2">Communication</div>
      <div style={{ color: "gray", fontSize: "0.8rem" }}>
        Were you able to communicate properly with the staff?
      </div>
      <div className="text-3xl">
        <StarRating />
      </div>
      <div className="mt-2">Recommend further</div>
      <div style={{ color: "gray", fontSize: "0.8rem" }}>
        Will you recommend The Himalayan Travels to others?
      </div>
      <div>
        <YesNoComponent />
      </div>
      <div className="mt-2">Praise</div>
      <div style={{ color: "gray", fontSize: "0.8rem" }}>
        How will you praise our services?
      </div>
      <div className="flex flex-row flex-wrap">
        {praises.map((praise, index) => (
          <PraiseButtons key={index} title={praise} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
