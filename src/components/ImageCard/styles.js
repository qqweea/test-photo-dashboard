import { Card } from 'antd';
import styled from 'styled-components';

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
    background-color: hsla(0,0%,74.5%,.3);
  }
`;
