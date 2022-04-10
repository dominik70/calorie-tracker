import { PageButton } from '../../atoms/PageButton/PageButton';
import { Container, PageNumber } from './Pagination.styles';

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({ currentPage, setCurrentPage, totalPages }: Props) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  return (
    <Container>
      {currentPage > 1 && (
        <>
          <PageButton page='first' onClick={handleFirstPage} />
          <PageButton page='previous' onClick={handlePrevPage} />
        </>
      )}
      <PageNumber>
        {currentPage} / {totalPages}
      </PageNumber>
      {currentPage < totalPages && <PageButton page='next' onClick={handleNextPage} />}
    </Container>
  );
};
