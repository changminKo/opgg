import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getMostInfo } from '@apis/getMostInfo';
import { useParams } from 'react-router-dom';
import {
  ChampionInfo,
  ChampionName,
  CSCount,
  KDAInfo,
  KDAScore,
  KDAScoreText,
  KDATotal,
  List,
  ListItem, LoseGraph, RecentChampInfo,
  RecentChampName, RecentGraph, RecentThumbImg,
  RecentWinRate, RecentWrapThumb,
  TabItem, TabList,
  TabWrapper,
  ThumbImg, WinGraph,
  WinRate,
  WinRateInfo,
  WrapGraph,
  WrapThumb,
} from '@components/DetailPage/ChampWinRate/ChampWinRate.styled';
import { IChampions, IRecentWinRate } from '@models/apis/mostInfo';

const sortTotalGames = (a: IChampions | IRecentWinRate, b: IChampions | IRecentWinRate) => {
  const totalA = a.wins + a.losses;
  const totalB = b.wins + b.losses;
  if (totalA < totalB) {
    return 1;
  }
  if (totalA > totalB) {
    return -1;
  }
  return 0;
};

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

export const ChampWinRate: React.FC = () => {
  const { summonerName: summonerNameParams }: { summonerName: string } = useParams();
  const { data, error } = useQuery(['getMostInfo', summonerNameParams], () => getMostInfo(summonerNameParams));
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const champions = data?.champions;
  const recentWinRate = data?.recentWinRate;

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return (
    <div>
      <TabWrapper>
        <TabList>
          <TabItem className={activeTabIndex === 0 ? 'on' : ''} onClick={() => { setActiveTabIndex(0); }}>챔피언 승률</TabItem>
        </TabList>
        <TabList>
          <TabItem className={activeTabIndex === 1 ? 'on' : ''} onClick={() => { setActiveTabIndex(1); }}>7일간 랭크 승률</TabItem>
        </TabList>
      </TabWrapper>
      { activeTabIndex === 0 && (
      <List>
        {champions && champions.sort(sortTotalGames).map((champion, index) => {
          const totalGames = champion.wins + champion.losses;
          const kda = ((champion.kills + champion.assists) / champion.deaths).toFixed(2);
          const winRate = ((champion.wins / (totalGames)) * 100).toFixed(0);

          return (
            <ListItem key={index}>
              <WrapThumb>
                <ThumbImg src={champion.imageUrl} alt="" />
              </WrapThumb>
              <ChampionInfo>
                <ChampionName>{champion.name}</ChampionName>
                <CSCount>
                  CS
                  {' '}
                  {champion.cs}
                  {' '}
                  (
                  {(champion.cs / totalGames).toFixed(1)}
                  )
                </CSCount>
              </ChampionInfo>
              <KDAInfo>
                <KDAScore theme={calcKDA(kda)}>
                  {kda}
                  :1
                  {' '}
                  <KDAScoreText>평점</KDAScoreText>
                </KDAScore>
                <KDATotal>
                  {(champion.kills / totalGames).toFixed(1)}
                  {' '}
                  /
                  {' '}
                  {(champion.deaths / totalGames).toFixed(1)}
                  {' '}
                  /
                  {' '}
                  {(champion.assists / totalGames).toFixed(1)}
                </KDATotal>
              </KDAInfo>
              <WinRateInfo>
                <WinRate theme={calcWinRate(winRate)}>
                  {winRate}
                  %
                </WinRate>
                <KDATotal>
                  {(totalGames)}
                  게임
                </KDATotal>
              </WinRateInfo>
            </ListItem>
          );
        })}
      </List>
      )}
      {activeTabIndex === 1 && (
      <List>
        {recentWinRate && recentWinRate.sort(sortTotalGames).map((recent, index) => {
          const totalGames = recent.wins + recent.losses;
          const winRate = ((recent.wins / (totalGames)) * 100).toFixed(0);

          return (
            <ListItem key={index}>
              <RecentWrapThumb>
                <RecentThumbImg src={recent.imageUrl} alt="" />
              </RecentWrapThumb>
              <RecentChampInfo>
                <RecentChampName>{recent.name}</RecentChampName>
              </RecentChampInfo>
              <RecentWinRate>
                {winRate}
                %
              </RecentWinRate>
              <WrapGraph>
                <RecentGraph>
                  {parseFloat(winRate) > 0 && (
                  <WinGraph style={{ width: `${winRate}%` }}>
                    {recent.wins}
                    승
                  </WinGraph>
                  )}
                  {parseFloat(winRate) < 100
                    && (
                    <LoseGraph style={{ width: `${100 - parseFloat(winRate)}%` }}>
                      {recent.losses}
                      패
                    </LoseGraph>
                    )}
                </RecentGraph>
              </WrapGraph>
            </ListItem>
          );
        })}
      </List>
      )}
    </div>
  );
};
