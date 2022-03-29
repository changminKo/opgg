import React from 'react';
import { useRecoilValue } from 'recoil';
import { summonerDataStore } from '@store/summoner';
import {
  NumberRanking,
  SummonerInfoWrapper,
  TextRanking,
  WrapInfo,
  WrapThumb,
} from '@components/DetailPage/SummonerInfo/SummonerInfo.styled';
import LevelBoxBg from '@components/DetailPage/SummonerInfo/levelbox.png';

export const SummonerInfo = () => {
  const summonerData = useRecoilValue(summonerDataStore);
  const summoner = summonerData?.summoner;

  return (
    <SummonerInfoWrapper>
      {summoner && (
        <>
          <WrapThumb
            theme={
            { backgroundImage: summoner.profileBorderImageUrl, levelBackgroundImage: LevelBoxBg }
          }
          >
            <img src={summoner.profileImageUrl} alt="" />
            <span>{summoner.level}</span>
          </WrapThumb>
          <WrapInfo>
            <h2>{summoner.name}</h2>
            <TextRanking>
              레더 랭킹
              {' '}
              {/* eslint-disable-next-line max-len */}
              <NumberRanking>{new Intl.NumberFormat().format(summoner.ladderRank.rank)}</NumberRanking>
              위 (상위
              {' '}
              {summoner.ladderRank.rankPercentOfTop}
              %)
            </TextRanking>
          </WrapInfo>
        </>
      )}
    </SummonerInfoWrapper>
  );
};
