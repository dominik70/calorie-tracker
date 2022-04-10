import { API_URL, API_KEY, PAGE_SIZE, NUTRIENTS } from './constants';
import { ApiFoods } from '../types';
import { format, startOfToday } from 'date-fns';

export const getUrl = (query: string, page: number): string => {
  return `${API_URL}?query=${query}&api_key=${API_KEY}&pageSize=${PAGE_SIZE}&pageNumber=${page}&sortBy=dataType.keyword`;
};

export const formatFoodList = (foods: ApiFoods[]) => {
  return foods.flatMap((food) => {
    const nutrients = NUTRIENTS.flatMap((nutrient) => {
      const foundNutrient = food.foodNutrients.find((el) => el.nutrientId === nutrient.id);

      if (foundNutrient) {
        return { ...nutrient, value: foundNutrient.value };
      } else return [];
    });

    if (nutrients.length === NUTRIENTS.length) {
      return {
        id: food.fdcId.toString(),
        name: food.description,
        brand: food.brandOwner ? food.brandOwner : null,
        ingredients: food.ingredients ? food.ingredients : null,
        nutrients,
      };
    } else return [];
  });
};

export const getInputDateFormat = (date?: Date): string => {
  return format(date ? date : startOfToday(), 'yyyy-MM-dd');
};

export const round = (number: number, precision = 0): number => {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};
