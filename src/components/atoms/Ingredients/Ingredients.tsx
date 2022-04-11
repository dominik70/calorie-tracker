import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { ShowButton, IngredientsWrapper } from './Ingredients.styles';

interface Props {
  content: string;
}

export const Ingredients = ({ content }: Props) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const handleShowIngredients = () => {
    setShowIngredients((prevState) => !prevState);
  };

  return (
    <IngredientsWrapper>
      <span>Ingredients: </span>
      {content.length > 85 ? (
        <>
          <span>{!showIngredients ? content.slice(0, 80) + '...' : content}</span>
          <ShowButton type='button' title='Show all ingredients' onClick={handleShowIngredients}>
            {showIngredients ? <Icon name='top-arrow' size={20} srText='show all ingredients' /> : <Icon name='down-arrow' size={20} srText='hide ingredients' />}
          </ShowButton>
        </>
      ) : (
        <span>{content}</span>
      )}
    </IngredientsWrapper>
  );
};
