import React from 'react';
import { StyledButton } from './styles';

const FilterButton = (props) => {
  const { children, onClick } = props;
  const onButtonClick = (e) => {
    e.preventDefault();
    onClick(e);
  };
  return <StyledButton onClick={onButtonClick}>{children}</StyledButton>;
};

export default FilterButton;
