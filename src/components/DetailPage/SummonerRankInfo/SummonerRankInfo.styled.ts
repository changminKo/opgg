import styled from '@emotion/styled';

export const SummonerRankInfoWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 300px;
  height: 124px;
  padding: 0 8px;
  border: solid 1px #cdd2d2;
  border-radius: 2px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  
  & + & {
    margin-top: 8px;
  }
`;

export const TierImage = styled('img')`
  display: block;
  width: 104px;
  height: 104px;
`;

export const TierInfo = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  font-size: 12px;
  color: #879292;
`;

export const InfoTitle = styled('span')`
  font-size: 11px;
  line-height: 13px;
`;

export const TotalGames = styled('span')`
  margin-top: 4px;
  font-family: AppleSDGothicNeo;
  line-height: 15px;
  color: #353a3a;
`;

export const Position = styled('span')`
  font-weight: bold;
`;

export const GameNumber = styled('span')`
  font-family: Helvetica;
`;

export const TierName = styled('strong')`
  margin-top: 4px;
  font-size: 15px;
  line-height: 18px;
  color: #1f8ecd;
`;

export const ScoreInfo = styled('span')`
  margin-top: 6px;
  line-height: 15px;
`;

export const RankScore = styled('span')`
  font-weight: bold;
  color: #555e5e;
`;

export const WinRate = styled('span')`
  margin-top: 3px;
  line-height: 15px;
`;
