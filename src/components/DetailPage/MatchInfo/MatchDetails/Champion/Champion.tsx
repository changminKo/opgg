import React from 'react';
import {
  ChampionWrapper,
  WrapThumb,
  ThumbImage,
  RuneSpells,
  RuneSpell, Name,
} from '@components/DetailPage/MatchInfo/MatchDetails/Champion/Champion.styled';
import { IGames } from '@/models';

export const Champion:React.FC<{ data: IGames }> = (props) => {
  const { data } = props;
  const { champion, spells, peak } = data;
  const name = champion.imageUrl.slice(champion.imageUrl.lastIndexOf(('/')) + 1, champion.imageUrl.lastIndexOf(('.')));

  return (
    <ChampionWrapper>
      <WrapThumb>
        <ThumbImage src={champion.imageUrl} alt="" />
      </WrapThumb>
      <RuneSpells>
        {spells.map((spell, index) => (
          <RuneSpell key={index}>
            <img src={spell.imageUrl} alt="" />
          </RuneSpell>
        ))}
      </RuneSpells>
      <RuneSpells>
        {peak.map((rune, index) => (
          <RuneSpell key={index}>
            <img src={rune} alt="" />
          </RuneSpell>
        ))}
      </RuneSpells>
      <Name>{name}</Name>
    </ChampionWrapper>
  );
};
