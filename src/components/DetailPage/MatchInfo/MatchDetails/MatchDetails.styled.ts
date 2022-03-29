import styled from '@emotion/styled';

type TListBackground = {
  theme: {
    bgColor: string;
    borderColor: string;
  }
};

export const GameList = styled('ul')`
  margin-top: 16px;
`;

export const GameListItem = styled('li')`
  display: table;
  position: relative;
  width: 690px;
  height: 98px;
  border: 1px solid ${(props:TListBackground) => props.theme.borderColor};;
  border-radius: 3px;
  background-color: ${(props:TListBackground) => props.theme.bgColor};
  table-layout: fixed;
  border-collapse: collapse;
  box-sizing: border-box;
  
  & + li {
    margin-top: 8px;
  }
  
  & > div {
    display: table-cell;
    height: 96px;
    vertical-align: middle;
  }
`;

export const ActionWrapper = styled('div')`
  position: relative;
  width: 30px;
  border: 1px solid ${(props:TListBackground) => props.theme.borderColor};;
  background-color: ${(props:TListBackground) => props.theme.bgColor};
`;

export const ActionDetailButton = styled('button')`
  width: 30px;
  height: 100%;
`;

export const DetailButtonImage = styled('img')`
  position: absolute;
  bottom: 10px;
  left: 9px;
  max-width: 100%;
  vertical-align: middle;
  transform: rotate( 0deg );
`;
