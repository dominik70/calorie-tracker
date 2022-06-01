import { Error } from '../../atoms/Error/Error';
import { PageContainer } from '../../atoms/PageContainer/PageContainer';

export const NotFound = () => {
  return (
    <PageContainer>
      <Error errors={{ error: { message: 'Page not found' } }} />
    </PageContainer>
  );
};
