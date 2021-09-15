import React from 'react';
import PropTypes from 'prop-types';
import { InputSelect, InputText } from '.';
import { Label, LabelText } from './styles';

const InputFactory = (props) => {
  const { type, label, ...rest } = props;

  return (
    <Label>
      {label && <LabelText>{label}</LabelText>}
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
