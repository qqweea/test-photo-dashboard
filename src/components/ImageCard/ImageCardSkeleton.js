import { Card, Skeleton } from 'antd';
import React from 'react';
import { SkeletonCard } from './styles';

const ImageCardSkeleton = () => {
  return (
    <SkeletonCard bordered>
      <Skeleton.Image
        style={{ height: '100%', width: '100%', minHeight: 170 }}
      />
      <Card.Meta title={<Skeleton active paragraph={false} />} />
    </SkeletonCard>
  );
};

export default ImageCardSkeleton;
