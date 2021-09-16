import { Col, Row } from 'antd';
import ImageCard, { ImageCardSkeleton } from 'components/ImageCard';
import { injectPhotosPartialState } from 'context/photos';
import useIsDesktop from 'hooks/useIsDesktop';
import PropTypes from 'prop-types';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ImageList = (props) => {
  const { items, isLoading, loadMore } = props;
  const isDesktop = useIsDesktop();

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
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        initialLoad={false}
        pageStart={1}
        style={{ overflow: 'initial' }}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        hasMore
        hasChildren={items.length > 0}
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
    </>
  );
};

ImageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  isLoading: PropTypes.bool,
  loadMore: PropTypes.func,
};

ImageList.defaultProps = {
  items: [],
  isLoading: false,
  loadMore: () => {},
};

const mapStateToProps = (state) => ({
  items: state.photos.items,
  isLoading: state.photos.isLoading,
  loadMore: state.photosActions.incrementCurrentPage,
});

export default injectPhotosPartialState(mapStateToProps)(ImageList);
