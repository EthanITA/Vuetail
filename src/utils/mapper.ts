import { Color, ColorProp, Size, SizeProp } from "../types.ts";

type ColorMap = Record<Color, string>;
type SizeMap = Record<Size, string>;

export const buttonColor: ColorMap = {
  default: "bg-default hover:bg-default-hover",
  danger: "bg-danger hover:bg-danger-hover",
  warning: "bg-warning hover:bg-warning-hover",
  success: "bg-success hover:bg-success-hover",
  info: "bg-info hover:bg-info-hover",
};

export const inputColor: ColorMap = {
  default: "border-gray-600 focus:border-default-hover",
  danger: "border-danger focus:border-danger-hover",
  warning: "border-warning focus:border-warning-hover",
  success: "border-success focus:border-success-hover",
  info: "border-info focus:border-info-hover",
};

export const buttonSize: SizeMap = {
  xs: "text-xs px-1 py-0.5 rounded",
  sm: "text-sm px-2 py-1 rounded-sm",
  md: "px-3 py-1.5 rounded-md",
  lg: "text-lg px-4 py-2 rounded-lg",
  xl: "text-xl px-5 py-2.5 rounded-xl",
};

export const inputSize: SizeMap = {
  xs: "text-xs px-1 py-[1px] border-[1px] rounded !focus:rounded",
  sm: "text-sm px-2 py-[3px] border-[1px] rounded-md focus:rounded-md",
  md: "px-3 py-1 border-2 rounded-md focus:rounded-md",
  lg: "text-lg px-4 py-1.5 border-2 rounded-lg focus:rounded-lg",
  xl: "text-xl px-5 py-2 border-2 rounded-xl focus:rounded-xl",
};

export default {
  getColor: (map: ColorMap, color?: ColorProp) => {
    if (color === "none") return "";
    if (!color) return map.default;
    return map[color] || map.default;
  },
  getSize: (map: SizeMap, size?: SizeProp) => {
    if (size === "none") return "";
    if (!size) return map.md;
    return map[size] || map.md;
  },
};
