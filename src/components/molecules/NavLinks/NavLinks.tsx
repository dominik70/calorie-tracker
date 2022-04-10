import { List, ListItem, StyledLink } from './NavLinks.styles';
import { MENU_PATHS } from '../../../utils/constants';

export const NavLinks = () => {
  return (
    <List>
      {MENU_PATHS.map(({ path, name }) => (
        <ListItem key={name}>
          <StyledLink to={path}>{name}</StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
