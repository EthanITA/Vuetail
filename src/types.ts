export type Color = "default" | "danger" | "warning" | "success";

export type HoverColor =
  | "default-hover"
  | "danger-hover"
  | "warning-hover"
  | "success-hover";

export const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
export type Size = (typeof sizes)[number];
