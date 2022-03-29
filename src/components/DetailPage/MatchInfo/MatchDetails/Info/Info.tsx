import React from 'react';
import {
  InfoBar, InfoResult, InfoType, InfoWrapper,
} from '@components/DetailPage/MatchInfo/MatchDetails/Info/Info.styled';
import moment from 'moment';
import { IGames } from '@/models';

const calcIsWinInfoBarColor = (isWin: boolean) => {
  if (isWin) {
    return { bgColor: '#99b9cf' };
  }
  return { bgColor: '#cea7a7' };
};

const calcDiffDateFormat = (diff: number) => {
  if (diff < 60) {
    return `${diff}초`;
  } if (diff < 3600) {
    return `${Math.floor(diff / 60)}분 ${diff % 60}초`;
  } if (diff < 86400) {
    return `${Math.floor(diff / 3600)}시간`;
  } if (diff < 172800) {
    return '하루';
  }
  return `${Math.floor(diff / 86400)}일`;
};

const calcInfoResultColor = (isWin: boolean) => {
  if (isWin) {
    return { color: '#1a78ae' };
  }
  return { color: '#c6443e' };
};

export const Info:React.FC<{ data: IGames }> = (props) => {
  const { data } = props;
  const {
    isWin, gameType, createDate: createDateData, gameLength,
  } = data;
  const createDate = moment(createDateData * 1000);
  const nowDate = moment();
  const dateDiff = (nowDate.diff(createDate) / 1000).toFixed(0);

  return (
    <InfoWrapper>
      <InfoType>{gameType}</InfoType>
      <div>
        {calcDiffDateFormat(parseFloat(dateDiff))}
        {' '}
        전
      </div>
      <InfoBar theme={calcIsWinInfoBarColor(isWin)} />
      <InfoResult theme={calcInfoResultColor(isWin)}>{isWin ? '승리' : '패배'}</InfoResult>
      <div>
        {Math.floor(gameLength / 60)}
        분
        {' '}
        {gameLength % 60}
        초
      </div>
    </InfoWrapper>
  );
};
