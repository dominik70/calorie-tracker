import { Container, MealHeading } from './Meal.styles';
import { MealCard } from '../../molecules/Cards/MealCard';
import { CardList } from '../../molecules/Cards/CardList';
import { MealCardFood } from '../../../types';
import { NutrientsSum } from '../../molecules/NutrientsSum/NutrientsSum';
import { Link } from 'react-router-dom';

interface Props {
  mealName: string;
  foodList: MealCardFood[];
}

export const Meal = ({ mealName, foodList }: Props) => {
  return (
    <Container>
      <MealHeading>{mealName}</MealHeading>
      {foodList.length === 0 ? (
        <p>
          You haven&apos;t added any food yet. <Link to='/search'>Search</Link> and add it.
        </p>
      ) : (
        <>
          <NutrientsSum foodList={foodList} hasShortNames={true} />
          <CardList>
            {foodList.map((food) => (
              <MealCard key={`${food.id}-${mealName}`} food={food} />
            ))}
          </CardList>
        </>
      )}
    </Container>
  );
};
