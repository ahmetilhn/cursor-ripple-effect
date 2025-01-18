type CursorRippleEffectParams = {
    isDarkTheme: boolean;
};

declare class CursorRippleEffect {
    static isDarkTheme: boolean;
    static init({ isDarkTheme }: CursorRippleEffectParams): void;
    static handleClick: (e: MouseEvent) => void;
    static listenClickEvent: () => void;
    static removeClickEvent: () => void;
}

export { CursorRippleEffect as default };
