import styled from '@emotion/styled';

export const AutoComplateWrapper = styled('div')`
  position: absolute;
  top: 36px;
  right: 0px;
  overflow: hidden;
  width: 260px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
  z-index: 1;
`;

export const SuggestList = styled('ul')`
  margin: 4px 0;
`;

export const SuggestItem = styled('a')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px;
  height: 53px;
  box-sizing: border-box;
`;

export const WrapThumb = styled('div')`
  width: 36px;
  height: 36px;
  margin-right: 14px;
  font-size: 0px;
  line-height: 0;
`;

export const ThumbImage = styled('img')`
  display: block;
  width: 100%;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
`;

export const Name = styled('span')`
  display: block;
  overflow: hidden;
  max-width: 178px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 1.43;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #44515c;
  
  & > em {
    color: #d31a45;
  }
`;

export const Desc = styled('span')`
  margin-top: 2px;
  line-height: 14px;
  font-family: Helvetica;
  font-size: 12px;
  color: #666;
`;
