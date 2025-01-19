import { memoize } from "memofy";
import CreateStyleObjParams from "../types/create-style-obj-params.type";

export const createStyleObj = memoize<Record<string, string | number>>(
  ({
    left,
    top,
    isDarkTheme,
    duration,
  }: CreateStyleObjParams): Record<string, string | number> => {
    return {
      position: "absolute",
      zIndex: 99999999,
      backgroundColor: isDarkTheme ? "#fff" : "#000",
      opacity: 0,
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      animation: `cursorRippleAnimation ${duration / 1000}s ease-in forwards`,
      left: left + "px",
      top: top + "px",
      transform: "translate(-50%, -50%)",
    };
  }
);
