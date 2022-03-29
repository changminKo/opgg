import styled from '@emotion/styled';

export const Header = styled('div')`
  min-width: 1080px;
  background-color: #1ea1f7;
`;

export const WrapHeader = styled('div')`
  max-width: 1440px;
  height: 97px;
  margin: 0 auto;
`;

export const InnerHeader = styled('div')`
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
`;

export const WrapSearch = styled('div')`
  position: absolute;
  right: 0;
  bottom: 12px;
`;

export const InputWrapper = styled('div')`
  display: flex;
  width: 260px;
  height: 32px;
`;

export const Input = styled('input')`
  display: block;
  width: 220px;
  height: 32px;
  padding-left: 14px;
  border: 0 none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 12px;
  line-height: 32px;
  background: #fff;
  outline: 0 none;
`;

export const Button = styled('button')`
  display: block;
  width: 40px;
  height: 32px;
  border: 0 none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  line-height: 32px;
  color: #1ea1f7;
  background: #fff;
`;
