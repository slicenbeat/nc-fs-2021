export type ThemeContextState = {
    theme: ITheme;
}

export interface ITheme {
    light: IThemeStyles,
    dark: IThemeStyles, 
}
export interface IThemeStyles {
    background: string;
    color: string;
}