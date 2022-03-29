import React, { useRef, useState } from 'react';
import _ from 'lodash';
import {
  Button,
  Header as HeaderElement,
  InnerHeader,
  Input,
  InputWrapper, WrapHeader,
  WrapSearch,
} from '@components/DetailPage/Header/Header.styled';
import { LastSearchInfo } from '@components/DetailPage/Header/LastSearchInfo';
import { useHistory } from 'react-router-dom';
import { AutoComplate } from '@components/DetailPage/Header/AutoColplate';
import { useQuery } from 'react-query';
import { getSummoner } from '@apis/getSummoner';
import { ISessionHistory, ISummoner } from '@/models';

// _.remove(favoriteList, (val, idx) => idx === favoriteList.findIndex((item) => item.name === summonerName));
const suggestDataFilter = (prevState: ISummoner[], currentState: ISummoner) => {
  const copyState = { ...currentState };
  const { summoner: { name: currentValue } } = copyState;

  _.remove(
    prevState,
    (val, idx) => idx === prevState.findIndex((item) => item.summoner.name === currentValue),
  );

  const result = [...prevState, copyState];
  if (result.length > 5) {
    result.splice(0, result.length - 5);
  }

  return result;
};

export const Header: React.FC = () => {
  const getSessionHistory: string | null = window.sessionStorage.getItem('history');
  const getSessionFavorite: string | null = window.sessionStorage.getItem('favorite');
  const historyList: ISessionHistory[] = getSessionHistory ? JSON.parse(getSessionHistory) : [] as unknown as string;
  const favoriteList: ISessionHistory[] = getSessionFavorite ? JSON.parse(getSessionFavorite) : [] as unknown as string;
  const history = useHistory();
  const [inputValue, setInputValue] = useState<string>('');
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showSuggest, setShowSuggest] = useState<boolean>(false);
  const [suggestData, setSuggestData] = useState<ISummoner[]>([] as ISummoner[]);
  const inputRef = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);
  useQuery(
    ['getSummonerSuggest', inputValue],
    () => getSummoner(inputValue.trim()),
    {
      onSuccess: (data) => data && setSuggestData((prevState) => suggestDataFilter(prevState, data)),
      onError: () => setSuggestData([] as ISummoner[]),
    },
  );
  const inputOnFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setShowHistory(value.length === 0);
    setShowSuggest(value.length !== 0);
  };
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    setShowHistory(value.length === 0);
    setShowSuggest(value.length !== 0);
    if (value.length === 0) setSuggestData([] as ISummoner[]);
  };

  // eslint-disable-next-line consistent-return
  const ButtonClickHandler = () => {
    const value = inputValue.trim();
    let favorite = false;
    if (value.length <= 0) return false;
    if (historyList.findIndex((item) => item.name === value) >= 0) {
      _.remove(historyList, (val, index) => index === historyList.findIndex((item) => item.name === value));
    }
    if (favoriteList.findIndex((item) => item.name === value) >= 0) {
      favorite = true;
    }
    historyList.unshift({ name: value, favorite });
    window.sessionStorage.setItem('history', JSON.stringify(historyList));
    history.push(`/summoners/${value}`);
    setInputValue('');
  };

  const inputKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { which } = event;
    if (which === 13) {
      ButtonClickHandler();
    }
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { relatedTarget } = event;
    const { value } = inputRef.current;
    if (!relatedTarget) {
      setShowHistory(false);
      setShowSuggest(false);
    } else {
      setShowHistory(value.length === 0 && true);
      setShowSuggest(value.length !== 0 && true);
    }
  };

  return (
    <HeaderElement>
      <WrapHeader>
        <InnerHeader>
          <WrapSearch>
            <InputWrapper>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="screen_out" htmlFor="SearchSummoner">소환사명,챔피언…</label>
              <Input
                id="SearchSummoner"
                autoComplete="off"
                placeholder="소환사명,챔피언…"
                onFocus={inputOnFocusHandler}
                onKeyPress={inputKeyPressHandler}
                onBlur={onBlurHandler}
              // onBlur={() => setShowHistory(false)}
                onChange={inputChangeHandler}
                value={inputValue}
                ref={inputRef}
              />
              <Button type="submit" onClick={ButtonClickHandler}>.GG</Button>
            </InputWrapper>
            {showHistory && suggestData.length === 0 && <LastSearchInfo setShowHistory={setShowHistory} />}
            {showSuggest && suggestData.length > 0 && <AutoComplate suggestData={suggestData} inputValue={inputValue} />}
          </WrapSearch>
        </InnerHeader>
      </WrapHeader>
    </HeaderElement>
  );
};
