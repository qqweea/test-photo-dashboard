import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { PaginationWrapper } from './styles';
import { injectPhotosPartialState } from 'context/photos';

const DesktopPagination = (props) => {
  const {
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
    photosError,
    albumsError,
    isLoading,
  } = props;

  if (!isLoading && (photosError || albumsError)) {
    return null;
  }

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
  photosError: PropTypes.object,
  albumsError: PropTypes.object,
};

DesktopPagination.defaultProps = {
  currentPage: 4,
  totalItems: 1000,
  itemsPerPage: 20,
  onPageChange: () => {},
  isLoading: false,
};

const mapStateToProps = (state) => ({
  albumsError: state.albums.error,
  photosError: state.photos.error,
  currentPage: state.query.currentPage,
  itemsPerPage: state.query.itemsPerPage,
  onPageChange: state.photosActions.setCurrentPage,
  totalItems: state.photos.totalItems,
  isLoading: state.photos.isLoading,
});

export default injectPhotosPartialState(mapStateToProps)(DesktopPagination);
