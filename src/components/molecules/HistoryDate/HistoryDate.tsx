import { useRef } from 'react';
import { Container, DateElement } from './HistoryDate.styles';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { PageButton } from '../../atoms/PageButton/PageButton';
import { getStringDate, getInputDateFormat } from '../../../utils/helpers';
import { addDays, startOfToday, startOfDay, isEqual } from 'date-fns';
import { toast } from 'react-toastify';
import { useDate } from '../../../context/DateContext';

export const HistoryDate = () => {
  const dateRef = useRef<HTMLInputElement>(null);
  const { date, setDate } = useDate();

  const handlePrevDay = () => {
    setDate(addDays(date, -1));
  };

  const handleNextDay = () => {
    const newDate = addDays(date, 1);
    if (startOfToday() >= startOfDay(newDate)) {
      setDate(newDate);
    }
  };

  const handleLastDay = () => {
    setDate(startOfToday());
  };

  const handleShowDate = () => {
    const newDate = startOfDay(new Date(dateRef.current?.value as string));

    if (newDate <= startOfToday()) {
      setDate((prevState) => (!isEqual(prevState, newDate) ? newDate : prevState));
    } else {
      toast.error('date must be earlier or equal to today', { toastId: 'date-error' });
    }
  };

  return (
    <Container>
      <PageButton page='previous' onClick={handlePrevDay} />
      <DateElement>{getStringDate(date)}</DateElement>
      {startOfDay(date) < startOfToday() && (
        <>
          <PageButton page='next' onClick={handleNextDay} />
          <PageButton page='last' onClick={handleLastDay} />
        </>
      )}
      <Input label='choose day' type='date' id={'date-input'} max={getInputDateFormat()} defaultValue={getInputDateFormat()} ref={dateRef} />
      <Button variant='contained' onClick={handleShowDate} size='s'>
        show
      </Button>
    </Container>
  );
};
