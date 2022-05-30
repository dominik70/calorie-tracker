import { Container, Info, SpinnerContainer } from './DietHistory.styles';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { Button } from '../../atoms/Button/Button';
import { HistoryDate } from '../../molecules/HistoryDate/HistoryDate';
import { NutrientsSum } from '../../molecules/NutrientsSum/NutrientsSum';
import { Meal } from '../../organisms/Meal/Meal';
import { MEAL_NAMES } from '../../../utils/constants';
import { useFood } from '../../../context/FoodContext';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner';
import { useDailyGoal } from '../../../context/DailyGoalContext';

export const DietHistory = () => {
  const { foodList, isLoading, deleteAllFood } = useFood();
  const { dailyGoal } = useDailyGoal();

  return (
    <Container>
      <SectionTitle>Your diet history</SectionTitle>
      <HistoryDate />
      {!isLoading && foodList ? (
        <>
          <h3>Calories and nutrients intake:</h3>
          <NutrientsSum dailyGoal={dailyGoal} foodList={foodList} hasShortNames={false} />
          {!dailyGoal && (
            <Info>
              You can set your daily nutrients goal <Link to='/profile'>here</Link>.
            </Info>
          )}
          {MEAL_NAMES.map((mealName) => foodList.filter((food) => food.mealName === mealName)).map((list, i) => (
            <Meal key={MEAL_NAMES[i]} mealName={MEAL_NAMES[i]} foodList={list} />
          ))}
          {foodList.length > 0 && (
            <Button onClick={deleteAllFood} variant='outlined'>
              Delete all food
            </Button>
          )}
        </>
      ) : (
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
      )}
    </Container>
  );
};
