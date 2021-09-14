import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'antd';
import messages from 'utils/messages';


const ImageCard = props => {
  const { title, url, thumbnailUrl } = props;
  return (
    <Card bordered hoverable>
      <Image
        width={'100%'}
        src={thumbnailUrl}
        preview={{
          src: url,
          mask: messages.misc.viewFullSize,
        }}
      />
      <Card.Meta title={title} />
    </Card>
  );
}

ImageCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

ImageCard.defaultProps = {
  albumId: 76,
  id: 3787,
  title: 'sed qui doloremque culpa',
  url: 'https://via.placeholder.com/600/ab567',
  thumbnailUrl: 'https://via.placeholder.com/150/ab567',
};

export default ImageCard
