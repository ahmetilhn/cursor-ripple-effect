import { memoize } from "memofy";
import { ANIMATION_VALUE } from "../constants/common.constants";
import CreateStyleObjParams from "../types/create-style-obj-params.type";

export const injectAnimationStyle = () => {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `@keyframes cursorRippleAnimation {
   to {
      width: 0px;
      height: 0px;
   }
  }`;
  document.body.appendChild(styleSheet);
};

export const createStyleObj = memoize<Record<string, string | number>>(
  ({
    left,
    top,
    isDarkTheme,
  }: CreateStyleObjParams): Record<string, string | number> => {
    return {
      position: "absolute",
      zIndex: 99999999,
      backgroundColor: isDarkTheme ? "#fff" : "#000",
      opacity: 0.2,
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      animation: ANIMATION_VALUE,
      left: left + "px",
      top: top + "px",
      transform: "translate(-50%, -50%)",
    };
  }
);
