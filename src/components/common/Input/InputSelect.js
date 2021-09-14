import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const CommonSelect = (props) => {
  const { options, ...rest } = props;
  return (
    <Select {...rest}>
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.optionLabel}
        </Select.Option>
      ))}
    </Select>
  );
};

CommonSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      optionLabel: PropTypes.node,
    })
  ),
};

CommonSelect.defaultProps = {
  options: [],
};

export default CommonSelect;
