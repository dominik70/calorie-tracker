import { useRef, useState } from 'react';
import { Container, Brand, FoodName, Actions } from './style';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Ingredients } from '../../atoms/Ingredients/Ingredients';
import { QUANTITY } from '../../../utils/constants';
import { Nutrients } from '../../atoms/Nutrients/Nutrients';
import { MealCardFood } from '../../../types';
import { toast } from 'react-toastify';
import { useFood } from '../../../context/FoodContext';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner';

interface Props {
  food: MealCardFood;
}

export const MealCard = ({ food }: Props) => {
  const quantityRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { deleteFood, updateFood } = useFood();

  const handleDeleteFood = () => {
    deleteFood(food.id);
  };

  const handleUpdateFood = () => {
    const newQuantity = quantityRef.current?.value && parseInt(quantityRef.current?.value);

    if (newQuantity === food.quantity) {
      toast.info('You entered same quantity', { toastId: 'different-quantity' });
    } else if (newQuantity && newQuantity < QUANTITY.max && newQuantity > QUANTITY.min) {
      setIsLoading(true);
      updateFood(food.id, newQuantity, () => setIsLoading(false));
      toast.dismiss();
    } else {
      toast.error(`quantity must be a number between ${QUANTITY.min} and ${QUANTITY.max}`, {
        toastId: 'quantity-error',
      });
    }
  };

  return (
    <Container>
      <FoodName>{food.name}</FoodName>
      {food.brand && <Brand>Brand: {food.brand}</Brand>}
      <Nutrients
        nutrients={food.nutrients.map((nutrient) => ({
          ...nutrient,
          value: (nutrient.value * food.quantity) / 100,
        }))}
        hasShortNames={true}
      />
      {food.ingredients && <Ingredients content={food.ingredients} />}
      <Actions>
        <Input label='quantity (g)' type='number' id={`${food.id}-${food.mealName}-quantity`} ref={quantityRef} defaultValue={food.quantity} />
        <Button type='button' variant='contained' size='s' onClick={handleUpdateFood} disabled={isLoading}>
          {!isLoading ? 'Set quantity' : <LoadingSpinner size={25} />}
        </Button>
        <Button type='button' variant='outlined' size='s' onClick={handleDeleteFood}>
          Delete
        </Button>
      </Actions>
    </Container>
  );
};
