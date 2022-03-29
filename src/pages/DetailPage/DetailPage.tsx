import React from 'react';
import {
  Article,
  Divider,
  SectionWrapper, SummonerChampInfoSection,
  SummonerInfoSection, SummonerMatchInfoSection, SummonerRankInfoSection,
} from '@pages/DetailPage/DetailPage.styled';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { getSummoner } from '@apis/getSummoner';
import { getItemInfo } from '@apis/getItemsInfo';
import { summonerDataStore, itemsDataStore } from '@/store';
import {
  PreviousSeasonInfo, Header, SummonerInfo, SummonerRankInfo, ChampWinRate, MatchInfo,
} from '@/components';

export const DetailPage = () => {
  const { summonerName: summonerNameParams }: { summonerName: string } = useParams();
  const setSummonerData = useSetRecoilState(summonerDataStore);
  const setItemsData = useSetRecoilState(itemsDataStore);
  const { error: summonerError } = useQuery(
    ['getSummoner', summonerNameParams],
    () => getSummoner(decodeURIComponent(summonerNameParams)),
    { onSuccess: (data) => data && setSummonerData(data) },
  );
  const { error: itemError } = useQuery(['getItemInfo'], () => getItemInfo(), { onSuccess: (data) => data && setItemsData(data) });

  if (summonerError) {
    // eslint-disable-next-line no-console
    console.error(summonerError);
  }
  if (itemError) {
    // eslint-disable-next-line no-console
    console.error(itemError);
  }

  return (
    <>
      <Header />
      <Article>
        <SummonerInfoSection>
          <PreviousSeasonInfo />
          <SummonerInfo />
        </SummonerInfoSection>
        <Divider />
        <SectionWrapper>
          <div>
            <SummonerRankInfoSection>
              <SummonerRankInfo />
            </SummonerRankInfoSection>
            <SummonerChampInfoSection>
              <ChampWinRate />
            </SummonerChampInfoSection>
          </div>
          <SummonerMatchInfoSection>
            <MatchInfo />
          </SummonerMatchInfoSection>
        </SectionWrapper>
      </Article>
    </>
  );
};
