"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";

const Button = styled.button`
  padding-right: 2rem;
  margin: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
`;

const IconWrapper = styled.div`
  color: ${(props) =>
    props.selected === "true"
      ? props.yes === "true"
        ? "green"
        : "red"
      : "gray"};

  &:hover {
    color: ${(props) =>
      props.selected === "true"
        ? props.yes === "true"
          ? "darkgreen"
          : "darkred"
        : "gray"};
  }
  svg {
    fill: ${(props) =>
      props.selected === "true"
        ? props.yes === "true"
          ? "green"
          : "red"
        : "gray"};

    &:hover {
      fill: ${(props) =>
        props.selected === "true"
          ? props.yes === "true"
            ? "darkgreen"
            : "darkred"
          : "grey"};
    }
  }
`;

const YesNoComponent = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-row">
      <Button onClick={() => setSelected("yes")}>
        <IconWrapper
          yes="true"
          selected={selected === "yes" ? "true" : "false"}
        >
          <LuThumbsUp size={32} /> Yes
        </IconWrapper>
      </Button>
      <Button onClick={() => setSelected("no")}>
        <IconWrapper
          yes="false"
          selected={selected === "no" ? "true" : "false"}
        >
          <LuThumbsDown size={32} /> No
        </IconWrapper>
      </Button>
    </div>
  );
};

export default YesNoComponent;
