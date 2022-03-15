export const pr = ([val = '', length = 0, fillString = ' ']: unknown[]) => {
  return String(val).padEnd(Number(length), String(fillString));
};
