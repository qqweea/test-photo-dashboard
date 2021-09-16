import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  .ant-card-cover {
    padding-top: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${process.env.PUBLIC_URL + '/fallback.png'});
  }
  .ant-image {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const SkeletonCard = styled(Card)`
  height: 100%;
  .ant-skeleton-element {
    position: relative;
    width: 100%;
    padding-top: 100%;
  }
  .ant-skeleton-title {
    margin: 6px 0 2px;
  }
  .ant-skeleton-image {
    position: absolute;
    width: auto;
    height: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: hsla(0, 0%, 74.5%, 0.3);
  }
`;
