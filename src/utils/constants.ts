export const MENU_PATHS = [
  { name: 'Search food', path: '/search' },
  { name: 'Diet history', path: '/diet-history' },
  { name: 'Profile', path: '/profile' },
];
export const MIN_QUERY_LENGTH = 3;
export const DEBOUNCE_TIMEOUT = 750;
export const API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const PAGE_SIZE = 6;
export const QUANTITY = {
  min: 0,
  max: 15000,
  default: 100,
};
export const MEAL_NAMES = ['breakfast', 'lunch', 'dinner'];
export const NUTRIENTS = [
  { name: 'kcal', shortName: 'kcal', id: 1008, value: 0, unit: '' },
  { name: 'carb', shortName: 'C', id: 1005, value: 0, unit: 'g' },
  { name: 'protein', shortName: 'P', id: 1003, value: 0, unit: 'g' },
  { name: 'fat', shortName: 'F', id: 1004, value: 0, unit: 'g' },
];
export const ARROWS = {
  previous: 'left-arrow',
  first: 'double-left-arrow',
  next: 'right-arrow',
  last: 'double-right-arrow',
};
export const ACTIVITY = {
  low: 1.2,
  moderate: 1.55,
  high: 1.725,
};
export const AIM = {
  lose: -300,
  maintain: 0,
  gain: 300,
};
