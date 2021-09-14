import styled from 'styled-components';

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  color: #fff;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: #40a9ff;
  }
`;
