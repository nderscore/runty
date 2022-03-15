export const pl = ([val = '', length = 0, fillString = ' ']: unknown[]) => {
  return String(val).padStart(Number(length), String(fillString));
};
