import React from 'react';
import {
  AutoComplateWrapper, Desc, Name,
  SuggestItem,
  SuggestList, ThumbImage,
  WrapThumb,
} from '@components/DetailPage/Header/AutoColplate/AutoComplate.styled';
import { ITierRank } from '@models/apis/summoner';
import { ISummoner } from '@/models';

const highlightingName = (name:string, inpValue:string) => {
  const matchResult = name.match(inpValue);

  return !matchResult ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{name}</>
  ) : (
    <>
      <em>{matchResult[0]}</em>
      {name.slice(matchResult.index, name.length)}
    </>
  );
};

const tierCalc = (tierPoint: number, tierName: string) => {
  if (tierName !== 'Challenger' && tierName !== 'Grandmaster' && tierName !== 'Master') {
    return `${tierName} ${Math.floor(tierPoint / 100)}`;
  }
  return tierName;
};

const lpCalc = (tierPoint: number, tierName: string) => {
  if (tierName !== 'Challenger' && tierName !== 'Grandmaster' && tierName !== 'Master') {
    return `${tierPoint % 100} LP`;
  }
  return `${tierPoint} LP`;
};

const calcTierInfo = (level: number, tierRank: ITierRank) => {
  if (level >= 30 && tierRank) {
    return `${tierCalc(tierRank.lp, tierRank.tier)} - ${lpCalc(tierRank.lp, tierRank.tier)}`;
  }
  return `Level ${level}`;
};

export const AutoComplate:React.FC<{ suggestData: ISummoner[], inputValue: string }> = (props) => {
  const { suggestData, inputValue } = props;

  return (
    <AutoComplateWrapper>
      <SuggestList>
        {suggestData.map((suggest, index) => {
          const { summoner } = suggest;

          return (
            <li key={index}>
              <SuggestItem href={`/summoners/${summoner.name}`}>
                <WrapThumb>
                  <ThumbImage src={summoner.profileImageUrl} alt="" />
                </WrapThumb>
                <div>
                  <Name>{highlightingName(summoner.name, inputValue)}</Name>
                  <Desc>{calcTierInfo(summoner.level, summoner.leagues[0]?.tierRank)}</Desc>
                </div>
              </SuggestItem>
            </li>
          );
        }) }
      </SuggestList>
    </AutoComplateWrapper>
  );
};
