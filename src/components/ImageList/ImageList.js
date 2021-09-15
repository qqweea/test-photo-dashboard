import { Col, Row } from 'antd';
import ImageCard, { ImageCardSkeleton } from 'components/ImageCard';
import PropTypes from 'prop-types';
import React from 'react';

const ImageList = (props) => {
  const { items, isLoading } = props;
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
};

ImageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  isLoading: PropTypes.bool,
};

ImageList.defaultProps = {
  items: [],
  isLoading: false,
};

export default ImageList;
