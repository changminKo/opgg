import styled from '@emotion/styled';

export const TabWrapper = styled('div')`
  position: relative;
  height: 34px;
  border: 1px solid #cdd2d2;
  border-radius: 2px;
  background: #f2f2f2;
`;

export const TabListWrapper = styled('ul')`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

export const TabList = styled('li')`
  height: 32px;
  margin: 0px 10px;
  vertical-align: top;
  
  &.on {
    border-bottom: 2px solid rgb(31, 142, 205);
    
    button {
      color: #1f8ecd;
    }
  }
`;

export const TabItem = styled('button')`
  display:block;
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  line-height: 36px;
  text-decoration: none;
  color: #555e5e;
`;
