import styled from 'styled-components';

export const Container = styled.li`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  max-width: 100%;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const FoodName = styled.h3`
  text-align: center;
  margin-bottom: 5px;
  font-size: 2rem;
`;

export const Brand = styled.p`
  font-size: 1.4rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-top: 15px;
`;
