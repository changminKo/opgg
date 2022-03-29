import styled from '@emotion/styled';

type TColorTheme = {
  theme: {
    color: string;
  }
};

export const TabWrapper = styled('ul')`
  display: flex;
  flex-direction: row;
`;

export const TabList = styled('li')`
  width: 50%;
  
  & + & > button{
    border-left: solid 1px #cdd2d2;
  }
`;

export const TabItem = styled('button')`
    display: block;
    width: 100%;
    height: 42px;
    font-size: 12px;
    color: #879292;
    background-color: #f2f2f2;
    border-bottom: solid 1px #cdd2d2;
    box-sizing: border-box;
    
    &.on {
      border-bottom: 0;
      font-weight: bold;
      color: #5e5e5e;
      background-color: #ededed;
    }
`;

export const List = styled('ul')`
`;

export const ListItem = styled('li')`
  display: table;
  width: 100%;
  height: 53px;
  background-color: #ededed;
  box-sizing: border-box;
  
  & + & {
    border-top: solid 1px #cdd2d2;
  }
`;

export const WrapThumb = styled('div')`
  display: table-cell;
  width: 60px;
  text-align: right;
  vertical-align: middle;
`;

export const ThumbImg = styled('img')`
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  vertical-align: top;
`;

export const ChampionInfo = styled('div')`
  display: table-cell;
  width: 85px;
  padding-left: 10px;
  vertical-align: middle;
`;

export const ChampionName = styled('em')`
  display: block;
  overflow: hidden;
  width: 70px;
  font-size: 13px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #5e5e5e;
`;

export const CSCount = styled('span')`
  display: block;
  font-size: 11px;
  color: #879292;
`;

export const KDAInfo = styled('div')`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

export const KDAScore = styled('em')`
  display: block;
  font-size: 13px;
  font-family: Helvetica;
  font-weight: bold;
  color: ${(props: TColorTheme) => props.theme.color};
  white-space: nowrap;
`;

export const KDAScoreText = styled('span')`
  font-family: AppleSDGothicNeo;
`;

export const KDATotal = styled('span')`
  display: block;
  font-family: Helvetica;
  font-size: 11px;
  color: #879292;
  white-space: nowrap;
`;

export const WinRateInfo = styled('div')`
  display: table-cell;
  width: 70px;
  margin-left: 24px;
  text-align: center;
  vertical-align: middle;
`;

export const WinRate = styled('span')`
  display: block;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: ${(props: TColorTheme) => props.theme.color};
`;

export const RecentWrapThumb = styled('div')`
  display: table-cell;
  width: 44px;
  text-align: right;
  vertical-align: middle;
`;

export const RecentThumbImg = styled('img')`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: top;
`;

export const RecentChampInfo = styled('div')`
  display: table-cell;
  width: 51px;
  padding-left: 10px;
  vertical-align: middle;
`;

export const RecentChampName = styled('em')`
  display: block;
  overflow: hidden;
  width: 61px;
  font-size: 13px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #5e5e5e;
`;

export const RecentWinRate = styled('div')`
  display: table-cell;
  width: 40px;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: #879292;
  vertical-align: middle;
`;

export const WrapGraph = styled('div')`
  display: table-cell;
  padding-left: 12px;
  padding-right: 8px;
  vertical-align: middle;
`;

export const RecentGraph = styled('div')`
  display: flex;
  flex-direction: row;
`;

export const WinGraph = styled('div')`
  min-width: fit-content;
  height: 24px;
  padding: 0 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  color: #ffffff;
  background-color: #1f8ecd;
`;

export const LoseGraph = styled('div')`
  min-width: fit-content;
  height: 24px;
  padding: 0 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
  background-color: #ee5a52;
`;
