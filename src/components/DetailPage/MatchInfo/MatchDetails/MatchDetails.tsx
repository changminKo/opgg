import React from 'react';
import {
  ActionDetailButton,
  ActionWrapper,
  DetailButtonImage,
  GameList,
  GameListItem,
} from '@components/DetailPage/MatchInfo/MatchDetails/MatchDetails.styled';
import IcoArrowWin from '@components/DetailPage/MatchInfo/MatchDetails/ico-arrow-win.png';
import IcoArrowLose from '@components/DetailPage/MatchInfo/MatchDetails/icon-arrow-lose.png';
import { Info } from '@components/DetailPage/MatchInfo/MatchDetails/Info';
import { Champion } from '@components/DetailPage/MatchInfo/MatchDetails/Champion';
import { Kda } from '@components/DetailPage/MatchInfo/MatchDetails/Kda';
import { Stats } from '@components/DetailPage/MatchInfo/MatchDetails/Stats';
import { Item } from '@components/DetailPage/MatchInfo/MatchDetails/Item';
import { Participants } from '@components/DetailPage/MatchInfo/MatchDetails/Participants';
import { IGames } from '@/models';

const calcIsWin = (isWin:boolean) => {
  if (isWin) {
    return { bgColor: '#a3cfec', borderColor: '#99b9cf' };
  }
  return { bgColor: '#e2b6b3', borderColor: '#cea7a7' };
};

const calcIsWinDetailButton = (isWin: boolean) => {
  if (isWin) {
    return { bgColor: '#4aa1d2', borderColor: '#64b1e4' };
  }
  return { bgColor: '#d67b77', borderColor: '#e89d99' };
};

const calcDataFilter = (tabIndex: number, data: IGames[]) => {
  const filter = tabIndex === 1 ? '솔랭' : '자유 5:5 랭크';

  return tabIndex === 0 ? data : data.filter((item) => item.gameType === filter);
};

export const MatchDetails:React.FC<{ activeTabIndex: number, data: IGames[] }> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { activeTabIndex, data } = props;

  return (
    <GameList>
      {calcDataFilter(activeTabIndex, data).map((game, index) => {
        const {
          isWin,
        } = game;

        return (
          <GameListItem theme={calcIsWin(isWin)} key={index}>
            <Info data={game} />
            <Champion data={game} />
            <Kda data={game} />
            <Stats data={game} />
            <Item data={game} />
            <Participants data={game} />
            <ActionWrapper theme={calcIsWinDetailButton(isWin)}>
              <ActionDetailButton>
                <DetailButtonImage src={isWin ? IcoArrowWin : IcoArrowLose} alt="상세보기" />
              </ActionDetailButton>
            </ActionWrapper>
          </GameListItem>
        );
      })}
    </GameList>
  );
};
