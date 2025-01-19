import CursorRippleEffectParams from "./cursor-ripple-effect-params.type";

type RippleParams = {
  isDarkTheme: CursorRippleEffectParams["isDarkTheme"];
  duration: CursorRippleEffectParams["duration"];
  left: MouseEvent["clientX"];
  top: MouseEvent["clientY"];
};

export default RippleParams;
