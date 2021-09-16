import DesktopPagination from 'components/DesktopPagination';
import ImageList from 'components/ImageList';
import OperationsBar from 'components/OperationsBar';
import useIsDesktop from 'hooks/useIsDesktop';
import AppLayout from 'layout/AppLayout/AppLayout';
import React from 'react';

const HomePage = () => {
  const isDesktop = useIsDesktop();
  return (
    <AppLayout operationsBar={<OperationsBar />}>
      <ImageList />
      {isDesktop && <DesktopPagination />}
    </AppLayout>
  );
};

export default HomePage;
