import { Color, HoverColor } from "../types.ts";

export const lightColors: Record<Color, string> = {
  default: "#0066ff",
  danger: "#E73D23",
  warning: "#F9D94E",
  success: "#2EB800",
  info: "#0066ff",
} as const;

export const lightHoverColors: Record<HoverColor, string> = {
  "default-hover": "#0052CC",
  "danger-hover": "#B82A14",
  "success-hover": "#248F00",
  "warning-hover": "#ECC209",
  "info-hover": "#0052CC",
} as const;
