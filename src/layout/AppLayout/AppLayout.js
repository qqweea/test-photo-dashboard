import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Drawer, Row, Col, BackTop } from 'antd';
import useIsDesktop from 'hooks/useIsDesktop';
import messages from 'utils/messages';
import { StyledContent, StyledHeader, StyledTitle } from './styles';
import FilterButton from 'components/FilterButton';

const AppLayout = (props) => {
  const { children, operationsBar } = props;
  const isDesktop = useIsDesktop();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Layout>
      <StyledHeader isMobile={!isDesktop}>
        <Row align="middle">
          <Col xs={22} md={24}>
            <StyledTitle>{messages.headers.title}</StyledTitle>
          </Col>
          {!isDesktop && (
            <Col xs={2}>
              <FilterButton onClick={toggleDrawer} />
            </Col>
          )}
        </Row>
      </StyledHeader>

      <Layout>
        <StyledContent isMobile={!isDesktop}>
          {operationsBar && isDesktop && operationsBar}
          {operationsBar && !isDesktop && (
            <Drawer
              title={messages.headers.drawerTitle}
              placement="right"
              onClose={closeDrawer}
              visible={isDrawerOpen}
            >
              {operationsBar}
            </Drawer>
          )}
          {children}
        </StyledContent>
      </Layout>
      <BackTop />
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
  operationsBar: PropTypes.node,
};

export default AppLayout;
