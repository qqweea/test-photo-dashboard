import { Col, Row } from 'antd';
import Input from 'components/common/Input';
import { injectPhotosPartialState } from 'context/photos';
import React from 'react';
import { ITEMS_PER_PAGE_OPTIONS } from 'utils/constants';
import messages from 'utils/messages';
import PropTypes from 'prop-types';
import { OperationsBarContainer } from './styles';

const OperationsBar = (props) => {
  const { albumId, itemsPerPage, albums, onSetSearch, onAlbumChange, onItemsPerPageChange } = props;

  return (
    <OperationsBarContainer>
      <Row gutter={[12, 12]} justify="space-between">
        <Col xs={24} md={8}>
          <Input
            type={'search'}
            placeholder={messages.placeholders.search}
            label={messages.labels.search}
            onSearch={onSetSearch}
            allowClear
          />
        </Col>
        <Col xs={24} md={8}>
          <Input
            type={'select'}
            placeholder={messages.placeholders.folder}
            label={messages.labels.folder}
            value={albumId}
            options={albums}
            onChange={onAlbumChange}
            showSearch
          />
        </Col>
        <Col xs={24} md={6} lg={4}>
          <Input
            type={'select'}
            label={messages.labels.itemsPerPage}
            value={itemsPerPage}
            options={ITEMS_PER_PAGE_OPTIONS}
            onChange={onItemsPerPageChange}
          />
        </Col>
      </Row>
    </OperationsBarContainer>
  );
};

OperationsBar.propTypes = {
  albumId: PropTypes.number,
  itemsPerPage: PropTypes.number,
  albums: PropTypes.array,
  onAlbumChange: PropTypes.func,
  onItemsPerPageChange: PropTypes.func,
  onSetSearch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  albumId: state.query.albumId,
  itemsPerPage: state.query.itemsPerPage,
  albums: state.albums.items,
  onAlbumChange: state.photosActions.setCurrentAlbum,
  onItemsPerPageChange: state.photosActions.setItemsPerPage,
  onSetSearch: state.photosActions.setSearch,
});

export default injectPhotosPartialState(mapStateToProps)(OperationsBar);
