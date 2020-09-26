export const pl = ([val = '', length = 0, fillString = ' ']) => {
  return String(val).padStart(length, fillString);
};
