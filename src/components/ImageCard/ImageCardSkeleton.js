import { Card, Skeleton } from 'antd';
import React from 'react';
import { SkeletonCard } from './styles';

const ImageCardSkeleton = () => {
  return (
    <SkeletonCard
      bordered
      cover={<Skeleton.Image />}
    >
      <Card.Meta title={<Skeleton active paragraph={false} />} />
    </SkeletonCard>
  );
};

export default ImageCardSkeleton;
