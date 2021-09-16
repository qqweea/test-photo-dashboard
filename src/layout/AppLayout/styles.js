import styled, { css } from 'styled-components';
import { Typography, Layout } from 'antd';

export const StyledTitle = styled(Typography.Title)`
  &.ant-typography {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

export const StyledHeader = styled(({ isMobile, ...rest }) => <Layout.Header {...rest} />)`
  display: flex;
  align-items: center;
  & > div {
    width: 100%;
  }
  ${(props) =>
    props.isMobile &&
    css`
      position: fixed;
      z-index: 1;
      width: 100%;
    `}
`;

export const StyledContent = styled(({ isMobile, ...rest }) => <Layout.Content {...rest} />)`
  width: 100%;
  padding: 2rem 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  ${(props) =>
    props.isMobile &&
    css`
      margin-top: 64px;
    `}
`;
