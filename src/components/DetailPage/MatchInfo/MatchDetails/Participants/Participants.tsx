import React from 'react';
import {
  ParticipantsItem,
  ParticipantsList,
  ParticipantsWrapper,
  WrapThumb,
  ThumbImage,
  WrapName,
  Name,
} from '@components/DetailPage/MatchInfo/MatchDetails/Participants/Participants.styled';
import { useQuery } from 'react-query';
import { getMatchDetail } from '@apis/getMatchDetail';
import { useParams } from 'react-router-dom';
import { IGames, IMatchDetailPlayer } from '@/models';

const ParticipantsItemElem = (players: IMatchDetailPlayer[]) => (
  <>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {players.map((player, index) => (
      <ParticipantsItem key={index}>
        <WrapThumb>
          <ThumbImage src={player.champion.imageUrl} alt="" />
        </WrapThumb>
        <WrapName>
          <Name to={`/summoners/${player.summonerName}`}>{player.summonerName}</Name>
        </WrapName>
      </ParticipantsItem>
    ))}
  </>
);

export const Participants:React.FC<{ data: IGames }> = (props) => {
  const { data } = props;
  const { summonerName: summonerNameParams }: { summonerName: string } = useParams();
  const { data: detailData, error } = useQuery(['getMatchDetail', data.gameId], () => getMatchDetail(summonerNameParams, data.gameId));

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return (
    <ParticipantsWrapper>
      {detailData && detailData.teams.map((team, index) => (
        <ParticipantsList key={index}>
          {ParticipantsItemElem(team.players)}
        </ParticipantsList>
      ))}
    </ParticipantsWrapper>
  );
};
