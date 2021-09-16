import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import messages from 'utils/messages';
import { StyledCard } from './styles';

const ImageCard = (props) => {
  const { title, url, thumbnailUrl } = props;
  return (
    <StyledCard
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
      <StyledCard.Meta title={title} />
    </StyledCard>
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
