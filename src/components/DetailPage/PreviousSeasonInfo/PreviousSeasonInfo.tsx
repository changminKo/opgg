import React from 'react';
import { useRecoilValue } from 'recoil';
import { summonerDataStore } from '@store/summoner';
import { BoldText, PreviousItem, PreviousList } from '@components/DetailPage/PreviousSeasonInfo/PreviousSeasonInfo.styled';

export const PreviousSeasonInfo = () => {
  const summonerData = useRecoilValue(summonerDataStore);
  // eslint-disable-next-line prefer-const
  const previousTiers = summonerData?.summoner?.previousTiers;
  const tempArr = previousTiers?.slice().reverse();

  return (
    <PreviousList>
      {tempArr && tempArr.map((tier, index) => (
        <PreviousItem key={index}>
          <BoldText>
            S
            {tier.season}
          </BoldText>
          {' '}
          {tier.tier}
        </PreviousItem>
      ))}
    </PreviousList>
  );
};
