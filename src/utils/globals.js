export const BLUE_ICON = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
export const RED_ICON = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

export const compose = (...fns) => value =>
  fns.reduceRight((previousValue, fn) => fn(previousValue), value);

export const pipe = (...fns) => value =>
  fns.reduce((previousValue, fn) => fn(previousValue), value);

export const partialize = (fn, ...args) => {
  return fn.bind(null, ...args);
};

export const sortArrayLocation = (a, b) => {
  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};
