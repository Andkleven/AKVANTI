import React, { useState } from "react";
import ScrollButton from "./ScrollButton";

const buttonName = [
  "LAKS",
  "OPPDRETTSLAKS",
  "PUKKELLAKS",
  "ÅRRET",
  "RÅYE",
  "UKJENT"
];

export default props => {
  console.log(props.specific);
  return (
    <>
      {buttonName.map((name, index) => {
        return (
          <ScrollButton
            key={index}
            name={name}
            specific={props.specific}
            setSpecific={props.setSpecific}
          />
        );
      })}
    </>
  );
};
