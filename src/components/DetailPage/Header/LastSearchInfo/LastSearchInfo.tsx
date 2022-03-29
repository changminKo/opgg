import React, { useState } from 'react';
import {
  FavoriteDeleteSummonerButton,
  FavoriteSummonerCheckBox,
  FavoriteSummonerLabel,
  LastSearchItem,
  LastSearchList, LastSearchNoDataItem,
  LastSearchTab, LastSearchTabList,
  LastSearchTabWrapper,
  LastSearchWrapper, SummonerName,
} from '@components/DetailPage/Header/LastSearchInfo/LastSearchInfo.styled';
import _ from 'lodash';
import { ISessionHistory } from '@/models';
import HistoryInfo from './history-info.png';
import FavoriteStart from './favoriteStar-gray.png';
import FavoriteOff from './favorite-off.png';
import FavoriteOn from './favorite-on.png';
import HistoryDelete from './history-delete.png';

// eslint-disable-next-line @typescript-eslint/ban-types
export const LastSearchInfo:React.FC<{ setShowHistory: Function }> = (props) => {
  const { setShowHistory } = props;
  const getSessionHistory: string | null = window.sessionStorage.getItem('history');
  const getSessionFavorite: string | null = window.sessionStorage.getItem('favorite');
  const historyList: ISessionHistory[] = getSessionHistory ? JSON.parse(getSessionHistory) : [] as unknown as string;
  const favoriteList: ISessionHistory[] = getSessionFavorite ? JSON.parse(getSessionFavorite) : [] as unknown as string;
  const [historyData, setHistoryData] = useState<ISessionHistory[]>(historyList);
  const [favoriteData, setFavoriteData] = useState<ISessionHistory[]>(favoriteList);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const tabClickHandler = (index: number) => {
    setActiveTabIndex(index);
  };

  const checkBoxClickHandler = (event: React.MouseEvent<HTMLLabelElement>, summonerName: string) => {
    const target = event.target as HTMLInputElement;
    const { checked } : { checked: boolean } = target;
    if (checked) {
      favoriteList.push({ name: summonerName, favorite: true });
      historyList[historyList.findIndex((item) => item.name === summonerName)].favorite = true;
    } else {
      _.remove(favoriteList, (val, idx) => idx === favoriteList.findIndex((item) => item.name === summonerName));
      historyList[historyList.findIndex((item) => item.name === summonerName)].favorite = false;
    }

    window.sessionStorage.setItem('favorite', JSON.stringify(favoriteList));
    window.sessionStorage.setItem('history', JSON.stringify(historyList));
    setFavoriteData([...favoriteList]);
    setHistoryData([...historyList]);
  };

  const historyDeleteButtonClickHandler = (index:number) => {
    _.remove(historyList, (item, i) => i === index);
    window.sessionStorage.setItem('history', JSON.stringify(historyList));
    setHistoryData([...historyList]);
  };

  const favoriteDeleteButtonClickHandler = (summonerName: string, index: number) => {
    _.remove(favoriteList, (item, i) => i === index);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    historyList[historyList.findIndex((item) => item.name === summonerName)]
      ? historyList[historyList.findIndex((item) => item.name === summonerName)].favorite = false : '';
    window.sessionStorage.setItem('favorite', JSON.stringify(favoriteList));
    window.sessionStorage.setItem('history', JSON.stringify(historyList));
    setFavoriteData([...favoriteList]);
    setHistoryData([...historyList]);
  };

  const summonerNameClickHandler = (name: string) => {
    const favorited = historyList[historyList.findIndex((item) => item.name === name)].favorite || false;
    if (historyList.findIndex((item) => item.name === name) >= 0) {
      _.remove(historyList, (val, index) => index === historyList.findIndex((item) => item.name === name));
    }
    historyList.unshift({ name, favorite: favorited });
    window.sessionStorage.setItem('history', JSON.stringify(historyList));
    setShowHistory(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noDataItem = (index: number) => (
    <LastSearchNoDataItem>
      <img
        src={HistoryInfo}
        width="16"
        height="16"
        alt="Info"
      />
      {index === 0 ? (<p>최근에 본 소환사가 없습니다.</p>) : (
        <p>
          관심있는 소환사에
          {' '}
          <img
            src={FavoriteStart}
            width="13"
            height="13"
            alt="Bookmark"
          />
          {' '}
          즐겨찾기를 하여 편리하게 정보를 받아보세요.
        </p>
      )}
    </LastSearchNoDataItem>
  );

  return (
    <LastSearchWrapper onBlur={(event) => (!event.relatedTarget ? setShowHistory(false) : setShowHistory(true))}>
      <LastSearchTabWrapper>
        <LastSearchTabList>
          <LastSearchTab className={activeTabIndex === 0 ? 'on' : ''} onClick={() => { tabClickHandler(0); }}>최근검색</LastSearchTab>
        </LastSearchTabList>
        <LastSearchTabList>
          <LastSearchTab className={activeTabIndex === 1 ? 'on' : ''} onClick={() => { tabClickHandler(1); }}>즐겨찾기</LastSearchTab>
        </LastSearchTabList>
      </LastSearchTabWrapper>
      {activeTabIndex === 0 && (
      <LastSearchList>
        {historyData.length !== 0 ? historyData.map((item, index) => (
          <LastSearchItem key={index}>
            <SummonerName to={`/summoners/${encodeURIComponent(item.name)}`} onClick={() => summonerNameClickHandler(item.name)}>{item.name}</SummonerName>
            {/* eslint-disable-next-line max-len */}
            <FavoriteSummonerLabel onClick={(event) => checkBoxClickHandler(event, item.name)}>
              <FavoriteSummonerCheckBox type="checkbox" theme={{ onImg: FavoriteOn, offImg: FavoriteOff }} defaultChecked={item.favorite} />
              <span className="screen_out">즐겨찾기 추가</span>
            </FavoriteSummonerLabel>
            <FavoriteDeleteSummonerButton type="button" onClick={() => historyDeleteButtonClickHandler(index)}>
              <img src={HistoryDelete} width="16" height="16" alt="리스트 제거" />
            </FavoriteDeleteSummonerButton>
          </LastSearchItem>
        )) : noDataItem(0)}
      </LastSearchList>
      )}

      {activeTabIndex === 1 && (
      <LastSearchList>
        {favoriteData.length !== 0 ? favoriteData.map((item, index) => (
          <LastSearchItem key={index}>
            <SummonerName to={`/summoners/${encodeURIComponent(item.name)}`} onClick={() => summonerNameClickHandler(item.name)}>{item.name}</SummonerName>
            <FavoriteDeleteSummonerButton type="button" onClick={() => favoriteDeleteButtonClickHandler(item.name, index)}>
              <img src={HistoryDelete} width="16" height="16" alt="리스트 제거" />
            </FavoriteDeleteSummonerButton>
          </LastSearchItem>
        )) : noDataItem(1)}
      </LastSearchList>
      )}
    </LastSearchWrapper>
  );
};
