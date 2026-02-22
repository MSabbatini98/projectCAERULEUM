'use client';

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

import "../../app/styles/modes.scss";

type ToggleOptionsType = "light" | "dark" | "fun";

const OPTIONS: ToggleOptionsType[] = ["light", "dark", "fun"];

const CustomizedSwitches = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("light");

  return (
    <div
      className={`outerContainerModes transition-colors ${
        selected === "light"
          ? "bg-light" : selected === "dark"
          ? "bg-dark" : "bg-red-500"
      }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  const selectedIndex = OPTIONS.indexOf(selected);

  return (
    <div className="containerModes">
      <motion.span
        layout 
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="motion"
         style={{ left: `${selectedIndex * 33.333}%` }}
      />

      {OPTIONS.map((option) => (
        <button
          key={option}
          className={`buttonModes  ${selected === option ? "selectedMode" : "unselectedMode"}`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default CustomizedSwitches;