import { isBoolean } from "amigo-js";
import { injectAnimationStyle } from "./styles/styles";
import CursorRippleEffectParams from "./types/cursor-ripple-effect-params.type";
import Ripple from "./ui/ripple/Ripple";
import { initMemofy } from "memofy";

class CursorRippleEffect {
  static isDarkTheme: boolean;
  static init({ isDarkTheme }: CursorRippleEffectParams) {
    if (!isBoolean(isDarkTheme))
      throw new Error("isDarkTheme props is required!");
    initMemofy({ trace: false, hasLogs: false });
    this.isDarkTheme = isDarkTheme;
    injectAnimationStyle();
    this.listenClickEvent();
  }

  static handleClick = (e: MouseEvent) => {
    Ripple.show({
      left: e.clientX,
      top: e.clientY,
      isDarkTheme: this.isDarkTheme,
    });
  };

  static listenClickEvent = (): void => {
    document.addEventListener("click", this.handleClick);
  };
}

export default CursorRippleEffect;
