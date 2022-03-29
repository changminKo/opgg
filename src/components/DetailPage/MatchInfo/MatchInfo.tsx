import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMatches } from '@apis/getMatches';
import {
  TabListWrapper,
  TabWrapper,
  TabList,
  TabItem,
} from '@components/DetailPage/MatchInfo/MatchInfo.styled';
import { useSetRecoilState } from 'recoil';
import { MatchSummary } from '@components/DetailPage/MatchInfo/MatchSummary';
import { MatchDetails } from '@components/DetailPage/MatchInfo/MatchDetails';
import { IMatches } from '@/models';
import { positionStore } from '@/store';

const calcDataFilter = (tabIndex: number, data: IMatches): IMatches => {
  const {
    games, summary, champions, positions,
  } = data;
  const filter = tabIndex === 1 ? '솔랭' : '자유 5:5 랭크';

  const gamesData = tabIndex === 0 ? games : games.filter((item) => item.gameType === filter);
  const summaryData = tabIndex === 0 ? summary : {
    assists: gamesData.map((item) => item.stats.general.assist).reduce((prev, curr) => prev + curr),
    deaths: gamesData.map((item) => item.stats.general.death).reduce((prev, curr) => prev + curr),
    kills: gamesData.map((item) => item.stats.general.kill).reduce((prev, curr) => prev + curr),
    wins: gamesData.filter((item) => item.isWin).length,
    losses: gamesData.length - gamesData.filter((item) => item.isWin).length,
  };
  const championsData = tabIndex === 0 ? champions : [{
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
  }];
  const positionsData = tabIndex === 0 ? positions : [{
    games: 0,
    losses: 0,
    position: '',
    positionName: '',
    wins: 0,
  }];

  return {
    champions: championsData,
    games: gamesData,
    positions: positionsData,
    summary: summaryData,
  };
};

const calcPositionText = (position: string) => {
  switch (position) {
    case 'TOP':
      return '탑';
    case 'JNG':
      return '정글';
    case 'MID':
      return '미드';
    case 'ADC':
      return '원딜';
    case 'SUP':
      return '서포터';
    default:
      return '';
  }
};

export const MatchInfo:React.FC = () => {
  const { summonerName: summonerNameParams }: { summonerName: string } = useParams();
  const { data, error } = useQuery(['getMatchInfo', summonerNameParams], () => getMatches(summonerNameParams));
  const [summaryInfoData, setSummaryInfoData] = useState<IMatches | undefined>(data);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const setPositionInfo = useSetRecoilState(positionStore);
  const tabName = ['전체', '솔로게임', '자유랭크'];

  const tabClickHandler = (index: number) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    if (data) setSummaryInfoData(calcDataFilter(activeTabIndex, data));
  }, [activeTabIndex, data]);

  useEffect(() => {
    if (data && data.positions[0]) {
      setPositionInfo(calcPositionText(data.positions[0].position));
    }
  }, [setPositionInfo, data]);

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return (
    <>
      <TabWrapper>
        <TabListWrapper>
          {tabName.map((tab, index) => (
            <TabList
              className={index === activeTabIndex ? 'on' : ''}
              onClick={() => tabClickHandler(index)}
              key={index}
            >
              <TabItem>{tab}</TabItem>
            </TabList>
          ))}
        </TabListWrapper>
      </TabWrapper>
      {data && summaryInfoData && (
        <>
          <MatchSummary data={summaryInfoData} />
          <MatchDetails activeTabIndex={activeTabIndex} data={data.games} />
        </>
      )}
    </>
  );
};
