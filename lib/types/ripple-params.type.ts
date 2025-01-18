import CursorRippleEffectParams from "./cursor-ripple-effect-params.type";

type RippleParams = {
  isDarkTheme: CursorRippleEffectParams["isDarkTheme"];
  left: MouseEvent["clientX"];
  top: MouseEvent["clientY"];
};

export default RippleParams;
