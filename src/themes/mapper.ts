import { Color, ColorProp, Size, SizeProp } from "../types.ts";

type ColorMap = Record<Color, string>;
type SizeMap = Record<Size, string>;

interface Mapper {
  Color: ColorMap;
  Size: SizeMap;
}

export const Button: Mapper = {
  Color: {
    default: "bg-default hover:bg-default-hover ring-default-hover",
    danger: "bg-danger hover:bg-danger-hover ring-danger-hover",
    warning: "bg-warning hover:bg-warning-hover ring-warning-hover",
    success: "bg-success hover:bg-success-hover ring-success-hover",
    info: "bg-info hover:bg-info-hover ring-info-hover",
  },
  Size: {
    xs: "text-xs px-1 py-0.5 rounded focus:ring-1 ring-offset-[0.5px]",
    sm: "text-sm px-2 py-1 rounded-md focus:ring-1 ring-offset-[0.5px]",
    md: "px-3 py-1.5 rounded-lg focus:ring-[1.5px] ring-offset-[1px]",
    lg: "text-lg px-4 py-2 rounded-xl focus:ring-2 ring-offset-2",
    xl: "text-xl px-5 py-2.5 rounded-2xl focus:ring-2 ring-offset-2",
  },
};

export const Input: Mapper = {
  Color: {
    default: "border-gray-500 ring-gray-500",
    danger: "border-danger ring-danger",
    warning: "border-warning ring-warning",
    success: "border-success ring-success",
    info: "border-info ring-info",
  },
  Size: {
    xs: "text-xs px-1 py-[1px] border-[1px] rounded focus:ring-[0.5px]",
    sm: "text-sm px-2 py-[3px] border-[1px] rounded-md focus:ring-[0.5px]",
    md: "px-3 py-[4.5px] border-[1.5px] rounded-lg focus:ring-1",
    lg: "text-lg px-4 py-[7px] border-2 rounded-xl focus:ring-1",
    xl: "text-xl px-5 py-[8px] border-2 rounded-2xl focus:ring-1",
  },
};

export const Checkbox: Omit<Mapper, "Color"> & {
  CheckSize: SizeMap;
  ActiveColor: ColorMap;
  NotActiveColor: ColorMap;
} = {
  Size: {
    xs: "w-3.5 h-3.5 border-[1px] rounded focus:ring-[0.5px]",
    sm: "w-4 h-4 border-[1px] rounded focus:ring-[0.5px]",
    md: "w-5 h-5 border-[1.5px] rounded-md focus:ring-1 ring-offset-[1px]",
    lg: "w-8 h-8 border-2 rounded-lg focus:ring-1",
    xl: "w-10 h-10 border-2 rounded-xl focus:ring-1",
  },
  CheckSize: {
    xs: "w-3.5 h-3.5",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  },
  ActiveColor: {
    default: "border-default bg-default ring-default",
    danger: "border-danger bg-danger ring-danger",
    info: "border-info bg-info ring-info",
    success: "border-success bg-success ring-success",
    warning: "border-warning bg-warning ring-warning",
  },
  NotActiveColor: {
    default: "border-gray-500 bg-gray-50 focus:ring-0",
    danger: "border-danger bg-gray-50 focus:ring-0",
    info: "border-info bg-gray-50 focus:ring-0",
    warning: "border-warning bg-gray-50 focus:ring-0",
    success: "border-success bg-gray-50 focus:ring-0",
  },
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