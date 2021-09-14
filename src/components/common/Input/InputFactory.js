import React from 'react';
import PropTypes from 'prop-types';
import { InputSelect, InputText } from '.';
import { Label } from './styles';

const InputFactory = (props) => {
  const { type, label, ...rest } = props;

  return (
    <Label>
      <span>{label}</span>
      {type === 'text' && <InputText {...rest} />}
      {type === 'select' && <InputSelect {...rest} />}
    </Label>
  );
};

InputFactory.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'select']),
};

InputFactory.defaultProps = {
  label: '',
  type: 'text',
};

export default InputFactory;
