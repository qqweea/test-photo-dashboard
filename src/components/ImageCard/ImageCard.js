import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'antd';
import messages from 'utils/messages';

const ImageCard = (props) => {
  const { title, url, thumbnailUrl } = props;
  return (
    <Card
      bordered
      hoverable
      cover={
        <Image
          width={'100%'}
          src={thumbnailUrl}
          preview={{
            src: url,
            mask: messages.misc.viewFullSize,
          }}
        />
      }
    >
      <Card.Meta title={title} />
    </Card>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

ImageCard.defaultProps = {
  title: '',
  url: '',
  thumbnailUrl: '',
};

export default ImageCard;
