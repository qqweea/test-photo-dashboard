import React from 'react';
import { Row, Col } from 'antd';
import Input from 'components/common/Input';
import messages from 'utils/messages';
import { ITEMS_PER_PAGE_OPTIONS } from 'utils/constants';
import { OperationsBarContainer } from './styles';

const OperationsBar = () => {
  return (
    <OperationsBarContainer>
      <Row gutter={12} justify='space-between'>
        <Col xs={24} md={8}>
          <Input placeholder={messages.placeholders.search} label={messages.labels.search} />
        </Col>
        <Col xs={24} md={8}>
          <Input
            type={'select'}
            placeholder={messages.placeholders.folder}
            label={messages.labels.folder}
          />
        </Col>
        <Col xs={24} md={4}>
          <Input
            type={'select'}
            label={messages.labels.itemsPerPage}
            options={ITEMS_PER_PAGE_OPTIONS}
          />
        </Col>
      </Row>
    </OperationsBarContainer>
  );
};

export default OperationsBar;
