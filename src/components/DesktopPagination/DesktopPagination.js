import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { PaginationWrapper } from './styles';

const DesktopPagination = (props) => {
  const { currentPage, totalItems, itemsPerPage, onPageChange, isLoading } = props;

  return (
    <PaginationWrapper>
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={itemsPerPage}
        onChange={onPageChange}
        showSizeChanger={false}
        disabled={isLoading}
        // showLessItems
      />
    </PaginationWrapper>
  );
};

DesktopPagination.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

DesktopPagination.defaultProps = {
  currentPage: 4,
  totalItems: 1000,
  itemsPerPage: 20,
  onPageChange: () => {},
  isLoading: false,
};

export default DesktopPagination;
