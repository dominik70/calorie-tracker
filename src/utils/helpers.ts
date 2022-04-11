import { API_URL, API_KEY, PAGE_SIZE, NUTRIENTS } from './constants';
import { ApiFoods, MealCardFood, Nutrient, NutrientsGoal } from '../types';
import { format, isEqual, startOfDay, startOfToday } from 'date-fns';

export const getUrl = (query: string, page: number) => {
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

export const getInputDateFormat = (date?: Date) => {
  return format(date ? date : startOfToday(), 'yyyy-MM-dd');
};

export const round = (number: number, precision = 0) => {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};

export const compareDays = (date1: Date, date2: Date) => {
  return isEqual(startOfDay(date1), startOfDay(date2));
};

export const getStringDate = (date: Date) => {
  return format(date, 'dd-MM-yyyy');
};

export const getFoodId = (mealName: string, foodId: string) => {
  return `${mealName}-${foodId}`;
};

export const getExceededNutrients = (sum: Nutrient[], goal: NutrientsGoal) => {
  return sum.flatMap((nutrient) => (nutrient.value > goal[nutrient.name] ? nutrient.name : []));
};

export const sumNutrients = (foodList: MealCardFood[]) => {
  return foodList.reduce((acc, cur) => {
    return cur.nutrients.map((nutrient, i) => ({
      ...nutrient,
      value: (nutrient.value / 100) * cur.quantity + acc[i].value,
    }));
  }, NUTRIENTS);
};
