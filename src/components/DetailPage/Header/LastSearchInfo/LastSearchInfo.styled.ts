import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type TFavoritIcon = {
  theme: {
    offImg: string,
    onImg: string
  }
};

export const LastSearchWrapper = styled('div')`
  position: absolute;
  overflow: hidden;
  top: 36px;
  width: 260px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
  z-index: 1;
`;

export const LastSearchTabWrapper = styled('ul')`
  display: flex;
  flex-direction: row;
`;

export const LastSearchTabList = styled('li')`
  width: 50%;
`;

export const LastSearchTab = styled('button')`
    display: block;
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #9c9c9c;
    background-color: #e3e3e3;
    
    &.on {
      color: #4a4a4a;
      background-color: #fff;
    }
`;

export const LastSearchList = styled('ul')`
  padding: 8px 0px;
`;

export const LastSearchItem = styled('li')`
  display: flex;
  width: inherit;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
`;

export const LastSearchNoDataItem = styled('li')`
  padding: 20px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  
  & > img {
    display: block;
    margin: 0px auto;
  }
  
  & > p {
    display: block;
    margin-top: 20px;
    font-size: 12px;
    line-height: 15px;
    color: #666;
    
    & > img {
      border: 0;
      vertical-align: middle;
      max-width: 100%;
    }
  }
`;

export const SummonerName = styled(Link)`
  flex: 1 1 0%;
  font-size: 12px;
  line-height: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #44515C;
`;

export const FavoriteSummonerLabel = styled('label')`
  display: block;
`;

export const FavoriteSummonerCheckBox = styled('input')`
  #root & {
    appearance: none;
    background: transparent;
    display: block;
    height: 16px;
    width: 16px;
    border: 0px;
    margin: 0px 0px 0px 8px;
    
    &::before {
      cursor: pointer;
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      text-align: center;
      background-image: url(${(props: TFavoritIcon) => props.theme.offImg});
    }
    
    &:checked::before {
      content: "";
      background-image: url(${(props: TFavoritIcon) => props.theme.onImg});
    }
  }
`;

export const FavoriteDeleteSummonerButton = styled('button')`
  margin-left: 8px;
  
  & > img {
    display: block;
  }
`;
