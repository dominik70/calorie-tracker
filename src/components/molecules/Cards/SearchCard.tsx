import { Container, Brand, FoodName, Actions } from './style';
import { Select } from '../../atoms/Select/Select';
import { Button } from '../../atoms/Button/Button';
import { Nutrients } from '../../atoms/Nutrients/Nutrients';
import { Input } from '../../atoms/Input/Input';
import { Ingredients } from '../../atoms/Ingredients/Ingredients';
import { getInputDateFormat } from '../../../utils/helpers';
import { MEAL_NAMES } from '../../../utils/constants';
import { Food } from '../../../types';

interface Props {
  food: Food;
}

export const SearchCard = ({ food }: Props) => {
  return (
    <Container>
      <FoodName>{food.name}</FoodName>
      {food.brand && <Brand>Brand: {food.brand}</Brand>}
      <Nutrients nutrients={food.nutrients} />
      <span>per 100g</span>
      {food.ingredients && <Ingredients content={food.ingredients} />}
      <Actions>
        <Input label='quantity (g)' type='number' id={`${food.id}-quantity`} />
        <Select label='meal' values={MEAL_NAMES} id={`${food.id}-meal`} />
        <Input label='date' type='date' id={`${food.id}-date`} max={getInputDateFormat()} />
        <Button type='button' variant='contained' size='s'>
          Add
        </Button>
      </Actions>
    </Container>
  );
};
