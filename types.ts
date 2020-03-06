export interface ColorPalette {
  id: number;
  paletteName: string;
  colors: Color[];
}

export interface Color {
  colorName: string;
  hexCode: string;
}
