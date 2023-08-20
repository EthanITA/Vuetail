import { Color, HoverColor } from "../types.ts";

export const lightColors: Record<Color, string> = {
  default: "#0066ff",
  danger: "#E73D23",
  warning: "#F9DC5C",
  success: "#2EB800",
} as const;

export const lightHoverColors: Record<HoverColor, string> = {
  "default-hover": "#005AE0",
  "danger-hover": "#CA2E16",
  "success-hover": "#248F00",
  "warning-hover": "#F8D53A",
} as const;
