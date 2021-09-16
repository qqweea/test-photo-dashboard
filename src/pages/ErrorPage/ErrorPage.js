import { Typography } from 'antd';
import { Bug } from 'components/common/Icons';
import AppLayout from 'layout/AppLayout/AppLayout';
import React from 'react';
import messages from 'utils/messages';
import { ErrorWrapper } from './styles';

const ErrorPage = () => {
  return (
    <AppLayout>
      <ErrorWrapper>
        <Bug />
        <Typography.Text>{messages.misc.errorGlobal}</Typography.Text>
        <Typography.Text>{messages.misc.tryLater}</Typography.Text>
      </ErrorWrapper>
    </AppLayout>
  );
};

export default ErrorPage;
