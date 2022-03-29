import styled from '@emotion/styled';

export const InfoSummary = styled('div')`
  display: flex;
  flex-direction: row;
  height: 158px;
  border: 1px solid #cdd2d2;
  border-top: 0 none;
  box-sizing: border-box;
`;

export const ScoreInfo = styled('div')`
  width: 276px;
`;

export const MostChampInfo = styled('div')`
  width: 228px;
  border-left: 1px solid #cdd2d2;
`;

export const MostPositionInfo = styled('div')`
  width: 186px;
  border-left: 1px solid #cdd2d2;
`;

export const InfoTitle = styled('em')`
  display: block;
  margin: 16px 0 0 33px;
  font-family: Helvetica;
  font-size: 12px;
  color: #666;
`;

export const InfoDesc = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WrapChart = styled('div')`
  width: 90px;
  height: 90px;
  margin: 10px 0 0 24px;
`;

export const WrapDesc = styled('div')`
  width: calc(100% - 114px);
  text-align: center;
`;

export const KDAInfo = styled('div')`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  color: #333;
`;

export const KDANumber = styled('span')`
  color: ${(props: { theme: { color: string } }) => props.theme.color};
`;

export const KDARatioInfo = styled('div')`
  font-family: Helvetica;
  font-size: 16px;
`;

export const KDARatio = styled('span')`
  color: ${(props: { theme: { color: string } }) => props.theme.color};
`;

export const KDAPercent = styled('span')`
  color: #c6443e;
`;

export const MostChampList = styled('ul')`
  margin: 16px;
  margin-right: 0;
`;

export const MostChampItem = styled('li')`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 33px;
  padding-left: 42px;
  padding-top: 1px;
  white-space: nowrap;
  
  & + & {
    margin-top: 12px;  
  }
`;

export const WrapThumb = styled('div')`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ThumbImg = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const MostInfo = styled('div')`
`;

export const MostName = styled('span')`
  display: block;
  font-size: 14px;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MostScoreWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Helvetica;
  font-size: 11px;
`;

export const MostWinRate = styled('span')`
  color: #555;
`;

export const MostWinRateNumber = styled('span')`
  font-weight: bold;
  color: ${(props: { theme: { color: string } }) => props.theme.color};
`;

export const VerticalBar = styled('div')`
  display: inline-block;
  width: 1px;
  height: 12px;
  margin: 0 6px;
  background-color: #cdd2d2;
`;

export const MostScore = styled('span')`
  color: ${(props: { theme: { color: string } }) => props.theme.color};
`;

export const NoMostChampData = styled('span')`
  font-size: 11px;
  color: #999;
`;

export const PositionTitle = styled('em')`
  display: block;
  margin: 16px 0 0 16px;
  font-family: Helvetica;
  font-size: 12px;
  color: #666;
`;

export const PositionList = styled('ul')`
  margin: 0 16px 0 12px;
`;

export const PositionListItem = styled('li')`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 34px;
  margin-top: 20px;
`;

export const PositionWrapThumb = styled('div')`
  width: 28px;
  height: 28px;
`;

export const PositionThumbImg = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
`;

export const PositionInfo = styled('div')`
  margin-left: 8px;
`;

export const PositionName = styled('span')`
  margin-bottom: 4px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
`;

export const PositionScoreWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Helvetica;
  font-size: 11px;
`;

export const PositionWinRate = styled('span')`
  color: #1f8ecd;
`;

export const PositionWinRateNumber = styled('span')`
  font-weight: bold;
`;

export const PositionScore = styled('span')`
  color: #666
`;

export const NoPositionData = styled('span')`
  margin-left: 42px;
  font-size: 11px;
  color: #999;
`;
