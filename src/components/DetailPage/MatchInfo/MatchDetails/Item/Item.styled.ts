import styled from '@emotion/styled';

type TBgColor = {
  theme: {
    bgColor: string;
  }
};

export const ItemWrapper = styled('div')`
  display: table-cell;
  height: 96px;
  vertical-align: middle;
`;

export const ListWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
`;

export const ItemList = styled('ul')`
  width: 72px;
  
  &::after {
    display: block;
    clear: both;
    content: ''
  }
`;

export const ItemListItem = styled('li')`
  display: inline-block;
  position: relative;
  float: left;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  background-color: ${(props: TBgColor) => props.theme.bgColor};
  
  & > img {
    width: 100%;
    vertical-align: middle;
  }
  
  &:hover > div {
    display: block;
  }
  
  
`;

export const ItemImage = styled('img')`
`;

export const Tooltip = styled('div')`
  display: none;
  position: absolute;
  bottom: calc(100% + 10px);
  left: 0;
  width: 321px;
  padding: 10px;
  color: #FFFFFF;
  font-size: 12px;
  background-color: #000;
  box-sizing: border-box;
  z-index: 9999;
  transform: translateX(calc(-50% + 11px));
  
  &::after {
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-color: #000;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left-width: 10px;
    border-left-style: solid;
    transform: translateX(-50%) translateY(75%) rotate(90deg);
    content: '';
  }
`;

export const ToolTipItemName = styled('span')`
  display: block;
  font-weight: bold;
  color: #00cfbc;
`;

export const ToolTipItemCost = styled('span')`
  color: #ffc659;
  margin-left: 4px;
`;

export const OtherWrapper = styled('div')`
  width: 22px;
`;

export const Ward = styled('div')`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  background-color: ${(props: TBgColor) => props.theme.bgColor};
  
  & > img {
    width: 100%;
    vertical-align: middle;
  }
  
  &:hover > div {
    display: block;
  }
`;

export const Build = styled('div')`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  
  & > button {
    width: 22px;
    height: 22px;
    
    & > img {
      width: 100%;
      vertical-align: middle;
    }
  }
`;

export const Control = styled('div')`
  margin-top: 7px;
  color: #353a3a;
  line-height: 13px;
  font-size: 11px;
  text-align: center;
  
  & > img {
    vertical-align: middle;
  }
`;
