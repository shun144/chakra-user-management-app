export const isNumber = (arg: unknown): arg is number => {
  return typeof arg === "number";
};

export const isEmpty = (arg: unknown) => {
  return arg === undefined || arg === null || arg === "";
};

export const parseNumber = (arg: string | undefined): number => {
  if (typeof arg !== "string") return NaN;
  if (arg.length === 0) return NaN;
  return Number(arg);
};
