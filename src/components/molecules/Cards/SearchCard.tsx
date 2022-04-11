import { useState } from 'react';
import { Container, Brand, FoodName, Actions } from './style';
import { Select } from '../../atoms/Select/Select';
import { Button } from '../../atoms/Button/Button';
import { Nutrients } from '../../atoms/Nutrients/Nutrients';
import { Input } from '../../atoms/Input/Input';
import { Ingredients } from '../../atoms/Ingredients/Ingredients';
import { getFoodId, getInputDateFormat } from '../../../utils/helpers';
import { MEAL_NAMES, QUANTITY } from '../../../utils/constants';
import { Food, SearchCardFood } from '../../../types';
import { useFood } from '../../../context/FoodContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { searchCardSchema } from '../../../lib/schemas';
import { serverTimestamp } from 'firebase/firestore';
import { Error } from '../../atoms/Error/Error';

interface Props {
  food: Food;
}

export const SearchCard = ({ food }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addFood } = useFood();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchCardFood>({
    resolver: yupResolver(searchCardSchema),
    defaultValues: { quantity: QUANTITY.default, date: getInputDateFormat() },
  });

  const handleAddFood = ({ date, quantity, mealName }: SearchCardFood) => {
    if (MEAL_NAMES.includes(mealName)) {
      const newFood = {
        ...food,
        mealName,
        quantity: quantity,
        createdAt: serverTimestamp(),
        id: getFoodId(mealName, food.id),
      };

      setIsLoading(true);
      addFood(newFood, new Date(date), () => setIsLoading(false));
    } else {
      toast.error('incorrect meal names', {
        toastId: 'add-error',
      });
    }
  };

  return (
    <Container>
      <FoodName>{food.name}</FoodName>
      {food.brand && <Brand>Brand: {food.brand}</Brand>}
      <Nutrients nutrients={food.nutrients} />
      <span>per 100g</span>
      {food.ingredients && <Ingredients content={food.ingredients} />}
      <Actions>
        <Input label='quantity (g)' type='number' id={`${food.id}-quantity`} {...register('quantity')} />
        <Select label='meal' values={MEAL_NAMES} id={`${food.id}-meal`} {...register('mealName')} />
        <Input label='date' type='date' id={`${food.id}-date`} {...register('date')} max={getInputDateFormat()} />
        <Button type='button' variant='contained' size='s' onClick={handleSubmit(handleAddFood)} disabled={isLoading}>
          {!isLoading ? 'Set' : <p>Loading...</p>}
        </Button>
      </Actions>
      <Error errors={errors} />
    </Container>
  );
};
