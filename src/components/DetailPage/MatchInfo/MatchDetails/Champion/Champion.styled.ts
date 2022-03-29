import styled from '@emotion/styled';

export const ChampionWrapper = styled('div')`
  width: 100px;
  font-size: 0;
`;

export const WrapThumb = styled('div')`
  display: inline-block;
  overflow: hidden;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  vertical-align: middle;
`;

export const ThumbImage = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
`;

export const RuneSpells = styled('div')`
  display: inline-block;
  margin-left: 4px;
  vertical-align: middle;
`;

export const RuneSpell = styled('div')`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  overflow: hidden;
  
  & > img {
    display: block;
    width: 100%;
    vertical-align: middle;
  }
  
  & + & {
    margin-top: 2px;
  }
`;

export const Name = styled('div')`
  overflow: hidden;
  margin-top: 8px;
  font-family: Helvetica;
  font-size: 11px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #555;
`;
