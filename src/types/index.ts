import { FieldValue } from '@firebase/firestore-types';

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorType {
  message: string;
}

export type NutrientsNames = 'kcal' | 'carb' | 'protein' | 'fat';

export interface Nutrient {
  name: 'kcal' | 'carb' | 'protein' | 'fat';
  shortName: string;
  value: number;
  id: number;
  unit: string;
}

export interface Food {
  id: string;
  name: string;
  brand: string | null;
  ingredients: string | null;
  nutrients: Nutrient[];
}

export interface ApiFoods {
  foodNutrients: ({ [key: string]: number } & NutrientsGoal)[];
  fdcId: number;
  description: string;
  brandOwner: null | string;
  ingredients: null | string;
}

export interface NutrientsGoal {
  kcal: number;
  protein: number;
  fat: number;
  carb: number;
}

export interface MealCardFood extends Food {
  quantity: number;
  mealName: string;
  createdAt: FieldValue;
}

export interface SearchCardFood {
  mealName: string;
  date: string;
  quantity: number;
}
