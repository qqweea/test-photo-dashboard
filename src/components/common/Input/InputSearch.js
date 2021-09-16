import React from 'react';
import { Input } from 'antd';

const InputSearch = (props) => {
  return <Input.Search size="large" {...props}></Input.Search>;
};

InputSearch.propTypes = {};

InputSearch.defaultProps = {};

export default InputSearch;
