type CursorRippleEffectParams = {
    isDarkTheme: boolean;
    duration: number;
};

declare class CursorRippleEffect {
    static isDarkTheme: boolean;
    static duration: number;
    static init({ isDarkTheme, duration }: CursorRippleEffectParams): void;
    static handleClick: (e: MouseEvent) => void;
    static listenClickEvent: () => void;
}

export { CursorRippleEffect as default };
