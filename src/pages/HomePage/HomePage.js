import DesktopPagination from 'components/DesktopPagination';
import ImageList from 'components/ImageList/ImageList';
import OperationsBar from 'components/OperationsBar';
import useIsDesktop from 'hooks/useIsDesktop';
import AppLayout from 'layout/AppLayout/AppLayout';
import React from 'react';

const HomePage = () => {
  const isDesktop = useIsDesktop();
  return (
    <AppLayout operationsBar={<OperationsBar />}>
      <ImageList
        items={[
          {
            albumId: 2,
            id: 64,
            title: 'doloremque culpa quia',
            url: 'https://via.placeholder.com/600/cd5a92',
            thumbnailUrl: 'https://via.placeholder.com/150/cd5a92',
          },
          {
            albumId: 76,
            id: 3787,
            title: 'sed qui doloremque culpa',
            url: 'https://via.placeholder.com/600/ab567',
            thumbnailUrl: 'https://via.placeholder.com/150/ab567',
          },
        ]}
        isLoading
      />
      {isDesktop && <DesktopPagination />}
    </AppLayout>
  );
};

export default HomePage;
