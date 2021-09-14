import { Card } from 'antd';
import styled from 'styled-components';

export const SkeletonCard = styled(Card)`
  height: 100%;
  .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .ant-skeleton-element {
    display: flex;
    height: 100%;
  }
  .ant-skeleton-title {
    margin: 12px 0 4px;
  }
`;
