import { SubContainer, Form } from './style';
import { Button } from '../../atoms/Button/Button';
import { Select } from '../../atoms/Select/Select';
import { Input } from '../../atoms/Input/Input';
import { Error } from '../../atoms/Error/Error';
import { getDailyGoal } from '../../../utils/helpers';
import { PersonalInfo } from '../../../types';
import { useDailyGoal } from '../../../context/DailyGoalContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { personalInfoSchema } from '../../../lib/schemas';

export const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: yupResolver(personalInfoSchema),
  });
  const { setDailyGoal } = useDailyGoal();

  const onSubmit = (data: PersonalInfo) => {
    const newDailyGoal = getDailyGoal(data);
    setDailyGoal(newDailyGoal);

    toast.success('successfully generated daily goal. Click submit to save.', {
      toastId: 'personal-info',
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SubContainer>
        <Input label='weight (kg)' type='number' id='weight' {...register('weight')} />
        <Input label='height (cm)' type='number' id='height' {...register('height')} />
        <Input label='age' type='number' id='age' {...register('age')} />
        <Select label='sex' values={['male', 'female']} id='sex' {...register('sex')} />
        <Select label='activity' values={['low', 'moderate', 'high']} id='activity' {...register('activity')} />
        <Select label='weight aim' values={['lose', 'maintain', 'gain']} id='aim' {...register('aim')} />
      </SubContainer>
      <Button type='submit' variant='contained' size='s'>
        Generate
      </Button>
      <Error errors={errors} />
    </Form>
  );
};
