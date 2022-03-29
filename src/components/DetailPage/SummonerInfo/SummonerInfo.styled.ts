import styled from '@emotion/styled';

type TWrapThumb = {
  theme: {
    backgroundImage: string;
    levelBackgroundImage: string;
  }
};

export const SummonerInfoWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  position: relative;
  padding-bottom: 14px;
`;

export const WrapThumb = styled('div')`
  position: relative;
  width: 120px;
  height: 120px;
  margin-left: 21px;
  
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${(props: TWrapThumb) => props.theme.backgroundImage}) no-repeat;
    background-position: center bottom;
    content: '';
  }
  
  & > img {
    display: block;
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-left: 10px;
  }
  
  & > span {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 44px;
    height: 24px;
    padding-top: 3px;
    font-family: Helvetica;
    font-size: 14px;
    text-align: center;
    line-height: 17px;
    color: #eabd56;
    background: url(${(props: TWrapThumb) => props.theme.levelBackgroundImage}) no-repeat;
    background-size: 100%;
    transform: translateX(-50%);
    box-sizing: border-box;
    z-index: 1;
`;

export const LevelBox = styled('span')`
`;

export const WrapInfo = styled('div')`
  margin-left: 17px;
  padding-top: 11px;
`;

export const TextRanking = styled('span')`
  color: #657070;
  letter-spacing: -0.42px;
`;

export const NumberRanking = styled('strong')`
  color: #657070;
  letter-spacing: -0.42px;
`;
