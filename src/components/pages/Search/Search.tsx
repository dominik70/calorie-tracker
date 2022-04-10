import { useState, useEffect } from 'react';
import { Container } from './Search.styles';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { CardList } from '../../molecules/Cards/CardList';
import { SearchBar } from '../../organisms/SearchBar/SearchBar';
import { Pagination } from '../../molecules/Pagination/Pagination';
import { SearchCard } from '../../molecules/Cards/SearchCard';
import { Food } from '../../../types';
import { getUrl, formatFoodList } from '../../../utils/helpers';
import { MIN_QUERY_LENGTH, DEBOUNCE_TIMEOUT } from '../../../utils/constants';
import { useFetch } from '../../../hooks/useFetch';
import { useDebounce } from '../../../hooks/useDebounce';
import { toast } from 'react-toastify';

export const Search = () => {
  const [foodList, setFoodList] = useState<Food[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce<string>(query, DEBOUNCE_TIMEOUT);

  const [data, isLoading] = useFetch(getUrl(debouncedQuery, currentPage), debouncedQuery.trim().length < MIN_QUERY_LENGTH);

  useEffect(() => {
    if (data) {
      window.scrollTo(0, 0);
      setFoodList(formatFoodList(data.foods) as Food[]);
      setTotalPages(data.totalPages);
    } else {
      setFoodList([]);
    }
  }, [data]);

  useEffect(() => {
    if (!isLoading && foodList.length === 0 && query.length >= MIN_QUERY_LENGTH) {
      toast.error('no food found', { toastId: 'no-food-found' });
    } else {
      toast.dismiss('no-food-found');
    }
  }, [foodList]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Container>
      <SectionTitle id='search'>Search food</SectionTitle>
      <SearchBar query={query} handleQueryChange={handleQueryChange} />
      {foodList.length === 0 && query.length < MIN_QUERY_LENGTH && !isLoading && <p>Enter at least {MIN_QUERY_LENGTH} characters</p>}
      {foodList.length > 0 && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
      {!isLoading ? (
        <CardList>
          {foodList.map((food) => (
            <SearchCard food={food} key={food.id} />
          ))}
        </CardList>
      ) : (
        <p>Loading...</p>
      )}
      {!isLoading && foodList.length > 0 && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
    </Container>
  );
};
