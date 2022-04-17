import { useEffect } from 'react';
import { Form, SubContainer } from './style';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Error } from '../../atoms/Error/Error';
import { NutrientsGoal } from '../../../types';

import { useDailyGoal } from '../../../context/DailyGoalContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { nutrientsGoalSchema } from '../../../lib/schemas';

export const DailyGoalForm = () => {
  const { dailyGoal, updateDailyGoal, deleteDailyGoal } = useDailyGoal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NutrientsGoal>({
    resolver: yupResolver(nutrientsGoalSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (dailyGoal) {
      reset(dailyGoal);
    }
  }, [dailyGoal]);

  return (
    <Form onSubmit={handleSubmit(updateDailyGoal)}>
      <SubContainer>
        <Input label='kcal' type='number' id='kcal' {...register('kcal')} />
        <Input label='carb (g)' type='number' id='carb' {...register('carb')} />
        <Input label='protein (g)' type='number' id='protein' {...register('protein')} />
        <Input label='fat (g)' type='number' id='fat' {...register('fat')} />
      </SubContainer>
      <SubContainer>
        <Button type='submit' variant='contained'>
          Submit
        </Button>
        <Button type='button' variant='outlined' size='s' onClick={deleteDailyGoal}>
          Delete
        </Button>
      </SubContainer>
      <Error errors={errors} />
    </Form>
  );
};
