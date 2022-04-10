import { Container, SingleNutrient, NutrientName, NutrientValue } from './Nutrients.styles';
import { NutrientsGoal, Nutrient } from '../../../types';
import { round } from '../../../utils/helpers';

interface Props {
  hasShortNames?: boolean;
  dailyGoal?: NutrientsGoal | null;
  nutrients: Nutrient[];
}

export const Nutrients = ({ hasShortNames = true, dailyGoal, nutrients }: Props) => {
  return (
    <Container hasShortNames={hasShortNames}>
      {nutrients.map((nutrient) => (
        <SingleNutrient key={nutrient.name}>
          <NutrientName>{hasShortNames ? nutrient.shortName : nutrient.name}: </NutrientName>
          <NutrientValue>
            {hasShortNames ? round(nutrient.value, 1) : round(nutrient.value, 0)}
            {nutrient.unit}
          </NutrientValue>
          {dailyGoal && dailyGoal[nutrient.name] && (
            <>
              {' '}
              / {round(dailyGoal[nutrient.name])}
              {nutrient.unit}
            </>
          )}
        </SingleNutrient>
      ))}
    </Container>
  );
};
