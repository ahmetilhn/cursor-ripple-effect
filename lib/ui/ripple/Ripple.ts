import { ANIMATION_DURATION } from "../../constants/common.constants";
import { createStyleObj } from "../../styles/styles";
import RippleParams from "../../types/ripple-params.type";

class Ripple {
  static LAST_ELEM_ID: string;
  static show({ left, top, isDarkTheme }: RippleParams) {
    if (this.LAST_ELEM_ID) this.remove(this.LAST_ELEM_ID);

    const elem = document.createElement("div");
    this.LAST_ELEM_ID = `element_ripple_${Math.random() * 100}`;
    elem.id = this.LAST_ELEM_ID;
    Object.assign(elem.style, createStyleObj({ left, top, isDarkTheme }));
    document.body.appendChild(elem);

    setTimeout(() => {
      this.remove(this.LAST_ELEM_ID);
    }, ANIMATION_DURATION);
  }

  static remove(elemId: string) {
    document.getElementById(elemId)?.remove();
  }
}

export default Ripple;
