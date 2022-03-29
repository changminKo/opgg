import React from 'react';
import { useRecoilValue } from 'recoil';
import { summonerDataStore } from '@store/summoner';
import {
  GameNumber,
  InfoTitle, Position, RankScore, ScoreInfo,
  SummonerRankInfoWrapper,
  TierImage,
  TierInfo, TierName, TotalGames, WinRate,
} from '@components/DetailPage/SummonerRankInfo/SummonerRankInfo.styled';
import { positionStore } from '@/store';

const tierCalc = (tierPoint: number, tierName: string) => {
  if (tierName !== 'Challenger' && tierName !== 'Grandmaster' && tierName !== 'Master') {
    return (
      <>
        {tierName}
        {' '}
        {Math.floor(tierPoint / 100)}
      </>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {tierName}
    </>
  );
};

const lpCalc = (tierPoint: number, tierName: string) => {
  if (tierName !== 'Challenger' && tierName !== 'Grandmaster' && tierName !== 'Master') {
    return (
      <>
        {tierPoint % 100}
        {' '}
        LP
      </>
    );
  }
  return (
    <>
      {tierPoint}
      LP
    </>
  );
};

export const SummonerRankInfo: React.FC = () => {
  const summonerData = useRecoilValue(summonerDataStore);
  const positionInfo = useRecoilValue(positionStore);
  const summoner = summonerData?.summoner;
  const leagues = summoner?.leagues;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {leagues && leagues.map((league, index) => (league.hasResults ? (
        <SummonerRankInfoWrapper key={index}>
          <TierImage src={league.tierRank.imageUrl} alt="" />
          <TierInfo>
            <InfoTitle>{index === 0 ? '솔로 랭크' : '자유 5:5 랭크'}</InfoTitle>
            <TotalGames>
              <Position>{positionInfo}</Position>
              {' '}
              (총
              {' '}
              <GameNumber>{league.wins + league.losses}</GameNumber>
              게임)
            </TotalGames>
            <TierName>
              {tierCalc(league.tierRank.lp, league.tierRank.tier)}
            </TierName>
            <ScoreInfo>
              <RankScore>
                {lpCalc(league.tierRank.lp, league.tierRank.tier)}
              </RankScore>
              {' '}
              /
              {' '}
              <span>
                {league.wins}
                승
                {' '}
                {league.losses}
                패
              </span>
            </ScoreInfo>
            <WinRate>
              승률
              {' '}
              {Math.round((league.wins / (league.wins + league.losses)) * 100)}
              %
            </WinRate>
          </TierInfo>
        </SummonerRankInfoWrapper>
      ) : (
        <SummonerRankInfoWrapper>
          <TierImage src={league.tierRank.imageUrl} alt="" />
          <TierInfo>
            <InfoTitle>{index === 0 ? '솔로 랭크' : '자유 5:5 랭크'}</InfoTitle>
            <TierName>Unranked</TierName>
          </TierInfo>
        </SummonerRankInfoWrapper>
      )))}
    </>
  );
};
