'use client';

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
// import { FiMoon, FiSun } from "react-icons/fi";

type ToggleOptionsType = "light" | "dark" | "fun";

const OPTIONS: ToggleOptionsType[] = ["light", "dark", "fun"];

const ThemeDebug = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("light");

  return (
    <div
      className={`grid h-[200px] place-content-center transition-colors ${
        selected === "light"
          ? "bg-white" : selected === "dark"
          ? "bg-black" : "bg-red-500"
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
    <div className="relative grid grid-cols-3 w-[300px] rounded-full border border-slate-600 overflow-hidden">
      <motion.span
        layout 
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-violet-600 to-indigo-600"
         style={{ left: `${selectedIndex * 33.333}%` }}
      />

      {OPTIONS.map((option) => (
        <button
          key={option}
          className={`z-10 py-2 text-sm font-medium capitalize transition-colors ${
            selected === option ? "text-white" : "text-slate-400"
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ThemeDebug;