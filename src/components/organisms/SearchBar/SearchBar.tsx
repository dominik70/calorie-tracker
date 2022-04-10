import React from 'react';
import { Container, StyledSearchBar, InputContainer, IconWrapper } from './SearchBar.styles';
import { Icon } from '../../atoms/Icon/Icon';

interface Props {
  query: string;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ query, handleQueryChange }: Props) => {
  return (
    <Container>
      <InputContainer>
        <StyledSearchBar
          aria-labelledby={'search'}
          type="search"
          placeholder="e.g. cheese"
          onChange={handleQueryChange}
          value={query}
        />
        <IconWrapper>
          <Icon name="search" size={30} srText="search food" color="gray" />
        </IconWrapper>
      </InputContainer>
    </Container>
  );
};
