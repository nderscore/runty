export const pr = ([val = '', length = 0, fillString = ' ']) => {
  return String(val).padEnd(length, fillString);
};
