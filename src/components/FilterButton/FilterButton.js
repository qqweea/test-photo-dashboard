import React from 'react';
import PropTypes from 'prop-types';
import { FilterIcon } from 'components/common/Icons';
import { StyledButton } from './styles';

const FilterButton = (props) => {
  const { onClick } = props;
  const onButtonClick = (e) => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <StyledButton onClick={onButtonClick}>
      <FilterIcon />
    </StyledButton>
  );
};

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default FilterButton;
