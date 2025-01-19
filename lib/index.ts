import { isBoolean } from "amigo-js";
import { injectAnimationStyle } from "./styles/animation";
import CursorRippleEffectParams from "./types/cursor-ripple-effect-params.type";
import Ripple from "./ui/ripple/Ripple";
import { initMemofy } from "memofy";

class CursorRippleEffect {
  static isDarkTheme: boolean;
  static duration: number;
  static init({ isDarkTheme, duration }: CursorRippleEffectParams) {
    if (!isBoolean(isDarkTheme))
      throw new Error("isDarkTheme props is required!");
    initMemofy({ trace: false, hasLogs: false });

    this.isDarkTheme = isDarkTheme;
    this.duration = duration;

    injectAnimationStyle();
    this.listenClickEvent();
  }

  static handleClick = (e: MouseEvent) => {
    Ripple.show({
      left: e.clientX,
      top: e.clientY,
      isDarkTheme: this.isDarkTheme,
      duration: this.duration,
    });
  };

  static listenClickEvent = (): void => {
    document.addEventListener("click", this.handleClick);
  };
}

export default CursorRippleEffect;
