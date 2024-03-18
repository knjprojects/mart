"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image"
import { useTheme } from "next-themes";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const { theme, setTheme } = useTheme()


  return (
    <div className="relative">
      <Image
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <Image
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt=""
        className={`w-12 cursor-pointer `}
      />
    </div>
  );
};

export default DarkMode;
