import React from 'react';
import PropTypes from 'prop-types';
import { InputSelect, InputText, InputSearch } from '.';
import { Label, LabelText } from './styles';

const InputFactory = (props) => {
  const { type, label, ...rest } = props;

  return (
    <Label>
      {label && <LabelText>{label}</LabelText>}
      {type === 'text' && <InputText {...rest} />}
      {type === 'select' && <InputSelect {...rest} />}
      {type === 'search' && <InputSearch {...rest} />}
    </Label>
  );
};

InputFactory.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'select', 'search']),
};

InputFactory.defaultProps = {
  label: '',
  type: 'text',
};

export default InputFactory;
