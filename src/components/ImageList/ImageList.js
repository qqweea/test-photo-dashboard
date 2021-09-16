import { Col, Empty, Row, Typography } from 'antd';
import ImageCard, { ImageCardSkeleton } from 'components/ImageCard';
import { injectPhotosPartialState } from 'context/photos';
import useIsDesktop from 'hooks/useIsDesktop';
import PropTypes from 'prop-types';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import messages from 'utils/messages';

const ImageList = (props) => {
  const { items, isLoading, search, totalItems, currentPage, itemsPerPage, loadMore } = props;
  const isDesktop = useIsDesktop();
  const hasMore = totalItems > currentPage * itemsPerPage;

  if (!isLoading && items.length === 0) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          search ? (
            <Typography.Text strong type="warning">
              {messages.misc.nothingFound}
            </Typography.Text>
          ) : (
            <Typography.Text strong type="danger">
              {messages.misc.errorGlobal}
            </Typography.Text>
          )
        }
      />
    );
  }

  if (isDesktop) {
    return (
      <Row gutter={[12, 12]}>
        {items.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <ImageCard {...item} />
          </Col>
        ))}
        {isLoading &&
          new Array(3).fill().map((val, i) => (
            <Col xs={24} sm={12} md={8} lg={6} key={i}>
              <ImageCardSkeleton />
            </Col>
          ))}
      </Row>
    );
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      style={{ overflow: 'initial' }}
      endMessage={
        <Empty
          style={{ marginTop: '2rem' }}
          description={<Typography.Text strong>Yay! You have seen it all</Typography.Text>}
        />
      }
      hasMore={hasMore}
    >
      <Row gutter={[12, 12]}>
        {items.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <ImageCard {...item} />
          </Col>
        ))}
        {isLoading &&
          new Array(3).fill().map((val, i) => (
            <Col xs={24} sm={12} md={8} lg={6} key={i}>
              <ImageCardSkeleton />
            </Col>
          ))}
      </Row>
    </InfiniteScroll>
  );
};

ImageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  isLoading: PropTypes.bool,
  search: PropTypes.string,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  loadMore: PropTypes.func,
};

ImageList.defaultProps = {
  items: [],
  isLoading: false,
  search: '',
  totalItems: 0,
  loadMore: () => {},
};

const mapStateToProps = (state) => ({
  items: state.photos.items,
  isLoading: state.photos.isLoading,
  totalItems: state.photos.totalItems,
  search: state.query.search,
  currentPage: state.query.currentPage,
  itemsPerPage: state.query.itemsPerPage,
  loadMore: state.photosActions.incrementCurrentPage,
});

export default injectPhotosPartialState(mapStateToProps)(ImageList);
