import React from 'react';
import {
  Cs, KillInfo, Level, Mmr, StatsWrapper,
} from '@components/DetailPage/MatchInfo/MatchDetails/Stats/Stats.styled';
import { IGames } from '@/models';

export const Stats:React.FC<{ data: IGames }> = (props) => {
  const { data } = props;
  const { champion, stats: { general } } = data;

  return (
    <StatsWrapper>
      <Level>
        레벨
        {' '}
        {champion.level}
      </Level>
      <Cs>
        <span>
          {general.cs}
          {' '}
          (
          {general.csPerMin}
          )
        </span>
        {' '}
        CS
      </Cs>
      <KillInfo>
        킬관여
        {' '}
        {general.contributionForKillRate}
      </KillInfo>
      <Mmr>
        <span>매치 평균</span>
        <span>{data.tierRankShort}</span>
      </Mmr>
    </StatsWrapper>
  );
};
