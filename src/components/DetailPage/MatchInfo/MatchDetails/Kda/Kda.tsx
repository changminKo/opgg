import React from 'react';
import {
  KDAInfo, KdaWrapper, MultiKillBadge, MvpBadge, RatioInfo,
} from '@components/DetailPage/MatchInfo/MatchDetails/Kda/Kda.styled';
import { IGames } from '@/models';

export const Kda:React.FC<{ data: IGames }> = (props) => {
  const { data } = props;
  const { stats: { general } } = data;
  const kda = ((general.kill + general.assist) / general.death).toFixed(2);

  const renderKda = () => {
    const value = parseFloat(kda);

    if (Number.isNaN(value)) {
      return (
        <>
          <span>0:1</span>
          {' '}
          평점
        </>
      );
    } if (!Number.isFinite(value)) {
      return (<span>Perfect</span>);
    }
    return (
      <>
        <span>
          {kda}
          {' '}
          :1
        </span>
        {' '}
        평점
      </>
    );
  };

  const renderMultiKillBadge = (multiKill:string) => {
    if (multiKill === 'Double Kill') {
      return (<MultiKillBadge>더블킬</MultiKillBadge>);
    } if (multiKill === 'Triple Kill') {
      return (<MultiKillBadge>트리플킬</MultiKillBadge>);
    } if (multiKill === 'Quadra Kill') {
      return (<MultiKillBadge>쿼드라킬</MultiKillBadge>);
    } if (multiKill === 'Penta Kill') {
      return (<MultiKillBadge>펜타킬</MultiKillBadge>);
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>);
  };

  const renderBadge = (score: string) => {
    if (score === 'ACE') {
      return (<MvpBadge theme={{ borderColor: '#7f3590', bgColor: '#8c51c5' }}>{score}</MvpBadge>);
    } if (score === 'MVP') {
      return (<MvpBadge theme={{ borderColor: '#b88a2a', bgColor: '#e19205' }}>{score}</MvpBadge>);
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>);
  };

  return (
    <KdaWrapper>
      <KDAInfo>
        <span>{general.kill}</span>
        {' '}
        /
        {' '}
        <span>{general.death}</span>
        {' '}
        /
        {' '}
        <span>{general.assist}</span>
      </KDAInfo>
      <RatioInfo>
        {renderKda()}
      </RatioInfo>
      {renderMultiKillBadge(general.largestMultiKillString)}
      {renderBadge(general.opScoreBadge)}
    </KdaWrapper>
  );
};
