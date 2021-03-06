import React from 'react';
import {
  InfoDesc,
  InfoSummary,
  InfoTitle,
  KDAInfo,
  KDANumber,
  KDAPercent,
  KDARatio,
  KDARatioInfo,
  MostChampInfo,
  MostChampItem,
  MostChampList,
  MostInfo,
  MostName,
  MostPositionInfo,
  MostScore,
  MostScoreWrapper,
  MostWinRate,
  MostWinRateNumber,
  NoMostChampData, NoPositionData,
  PositionInfo,
  PositionList,
  PositionListItem,
  PositionName, PositionScore,
  PositionScoreWrapper,
  PositionThumbImg, PositionTitle,
  PositionWinRate, PositionWinRateNumber,
  PositionWrapThumb,
  ScoreInfo,
  ThumbImg,
  VerticalBar,
  WrapChart,
  WrapDesc,
  WrapThumb,
} from '@components/DetailPage/MatchInfo/MatchSummary/MatchSummary.styled';
import IcoNoDataMostChamp from '@components/DetailPage/MatchInfo/MatchSummary/noMostChamp.svg';
import IcoTop from '@components/DetailPage/MatchInfo/MatchSummary/icon-mostposition-top.svg';
import IcoJng from '@components/DetailPage/MatchInfo/MatchSummary/icon-mostposition-mid.svg';
import IcoMid from '@components/DetailPage/MatchInfo/MatchSummary/icon-mostposition-jng.svg';
import IcoAdc from '@components/DetailPage/MatchInfo/MatchSummary/icon-mostposition-adc.svg';
import IcoSup from '@components/DetailPage/MatchInfo/MatchSummary/icon-mostposition-sup.svg';
import { Chart } from '@components/DetailPage/MatchInfo/MatchSummary/Chart';
import { IMatches } from '@/models';

const calcKDA = (kda: string) => {
  if (parseFloat(kda) >= 5) {
    return { color: '#e19205' };
  } if (parseFloat(kda) >= 4) {
    return { color: '#1f8ecd' };
  } if (parseFloat(kda) >= 3) {
    return { color: '#2daf7f' };
  }

  return { color: '#5e5e5e' };
};

const calcWinRate = (rate: string) => {
  if (parseFloat(rate) >= 60) {
    return { color: '#c6443e' };
  }
  return { color: '#525252' };
};

const calcScore = (score: string) => {
  if (parseFloat(score) >= 6.0) {
    return { color: '#e19205' };
  }
  return { color: '#555' };
};

const calcPositionImg = (position: string) => {
  switch (position) {
    case 'TOP':
      return IcoTop;
    case 'JNG':
      return IcoJng;
    case 'MID':
      return IcoMid;
    case 'ADC':
      return IcoAdc;
    case 'SUP':
      return IcoSup;
    default:
      return '';
  }
};

const calcPositionText = (position: string) => {
  switch (position) {
    case 'TOP':
      return '???';
    case 'JNG':
      return '??????';
    case 'MID':
      return '??????';
    case 'ADC':
      return '??????';
    case 'SUP':
      return '?????????';
    default:
      return '';
  }
};

const NoDataMostChamp = {
  assists: 0,
  deaths: 0,
  games: 0,
  id: 0,
  imageUrl: '',
  key: '',
  kills: 0,
  losses: 0,
  name: '',
  wins: 0,
};

export const MatchSummary:React.FC<{ data: IMatches }> = (props) => {
  const {
    data: {
      summary,
      champions,
      positions,
    },
  } = props;
  if (champions && champions.length < 3) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < 3 - champions.length; index++) {
      champions.push(NoDataMostChamp);
    }
  }

  return (
    <InfoSummary>
      <ScoreInfo>
        <InfoTitle>
          {summary.wins + summary.losses}
          ???
          {' '}
          {summary.wins}
          ???
          {' '}
          {summary.losses}
          ???
        </InfoTitle>
        <InfoDesc>
          <WrapChart>
            <Chart data={summary} />
          </WrapChart>
          <WrapDesc>
            <KDAInfo>
              <KDANumber theme={{ color: '#5e5e5e' }}>
                {(summary.kills / (summary.wins + summary.losses)).toFixed(1)}
              </KDANumber>
              {' '}
              /
              {' '}
              <KDANumber theme={{ color: '#c6443e' }}>
                {(summary.deaths / (summary.wins + summary.losses)).toFixed(1)}
              </KDANumber>
              {' '}
              /
              {' '}
              <KDANumber theme={{ color: '#5e5e5e' }}>
                {(summary.losses / (summary.wins + summary.losses)).toFixed(1)}
              </KDANumber>
            </KDAInfo>
            <KDARatioInfo>
              <KDARatio theme={calcKDA(((summary.kills + summary.assists) / summary.deaths).toFixed(2))}>
                <strong>{((summary.kills + summary.assists) / summary.deaths).toFixed(2)}</strong>
                :1
              </KDARatio>
              {' '}
              <KDAPercent>(50%)</KDAPercent>
            </KDARatioInfo>
          </WrapDesc>
        </InfoDesc>
      </ScoreInfo>
      <MostChampInfo>
        <em className="screen_out">?????? ?????????</em>
        <MostChampList>
          {champions.map((champion, index) => {
            const totalGames = champion.wins + champion.losses;
            const kda = ((champion.kills + champion.assists) / champion.deaths).toFixed(2);
            const winRate = ((champion.wins / (totalGames)) * 100).toFixed(0);

            return champion.name !== '' ? (
              <MostChampItem key={index}>
                <WrapThumb>
                  <ThumbImg src={champion.imageUrl} alt="" />
                </WrapThumb>
                <MostInfo>
                  <MostName>{champion.name}</MostName>
                  <MostScoreWrapper>
                    <MostWinRate>
                      <MostWinRateNumber theme={calcWinRate(winRate)}>
                        {winRate}
                        %
                      </MostWinRateNumber>
                      {' '}
                      (
                      {champion.wins}
                      ???
                      {' '}
                      {champion.losses}
                      ???)
                    </MostWinRate>
                    <VerticalBar />
                    <MostScore theme={calcScore(kda)}>
                      {kda}
                      {' '}
                      ??????
                    </MostScore>
                  </MostScoreWrapper>
                </MostInfo>
              </MostChampItem>
            ) : (
              <MostChampItem key={index}>
                <WrapThumb>
                  <ThumbImg src={IcoNoDataMostChamp} alt="" />
                </WrapThumb>
                <MostInfo>
                  <NoMostChampData>????????? ????????? ????????????.</NoMostChampData>
                </MostInfo>
              </MostChampItem>
            );
          })}

        </MostChampList>
      </MostChampInfo>
      <MostPositionInfo>
        <PositionTitle>?????? ????????? (??????)</PositionTitle>
        <PositionList>
          {positions.map((position, index) => {
            const totalGames = position.wins + position.losses;
            const pickRate = ((position.games / (summary.wins + summary.losses)) * 100).toFixed(0);
            const winRate = ((position.wins / (totalGames)) * 100).toFixed(0);

            return position.position !== '' ? (
              <PositionListItem key={index}>
                <PositionWrapThumb>
                  <PositionThumbImg src={calcPositionImg(position.position)} alt="" />
                </PositionWrapThumb>
                <PositionInfo>
                  <PositionName>{calcPositionText(position.position)}</PositionName>
                  <PositionScoreWrapper>
                    <PositionWinRate>
                      <span className="screen_out">?????????</span>
                      <PositionWinRateNumber>{pickRate}</PositionWinRateNumber>
                      %
                    </PositionWinRate>
                    <VerticalBar />
                    <PositionScore>
                      ??????
                      {' '}
                      <PositionWinRateNumber>{winRate}</PositionWinRateNumber>
                      %
                    </PositionScore>
                  </PositionScoreWrapper>
                </PositionInfo>
              </PositionListItem>
            ) : (
              <PositionListItem key={index}>
                <WrapThumb>
                  <ThumbImg src={IcoNoDataMostChamp} alt="" />
                </WrapThumb>
                <MostInfo>
                  <NoPositionData>????????? ????????? ????????????.</NoPositionData>
                </MostInfo>
              </PositionListItem>
            );
          })}
        </PositionList>
      </MostPositionInfo>
    </InfoSummary>
  );
};
