import { StyledPageButton } from './PageButton.styles';
import { Icon } from '../Icon/Icon';
import { ARROWS } from '../../../utils/constants';

interface Props {
  page: 'previous' | 'first' | 'next' | 'last';
  onClick: React.MouseEventHandler;
}

export const PageButton = ({ page, onClick }: Props) => {
  return (
    <StyledPageButton variant='contained' onClick={onClick}>
      <Icon name={ARROWS[page]} size={20} srText='previous page' color='white' />
    </StyledPageButton>
  );
};
