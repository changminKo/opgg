import styled from '@emotion/styled';

type TBgColor = {
  theme: {
    bgColor: string;
  }
};

type TColor = {
  theme: {
    color: string;
  }
};

export const InfoWrapper = styled('div')`
  width: 70px;
  text-align: center;
  font-size: 11px;
  color: #555;
  line-height: 16px;
`;

export const InfoType = styled('div')`
  font-weight: bold;
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoBar = styled('div')`
  display: block;
  width: 27px;
  margin: 5px auto;
  height: 2px;
  background: ${(props:TBgColor) => props.theme.bgColor};
`;

export const InfoResult = styled('div')`
  font-weight: bold;
  color: ${(props:TColor) => props.theme.color};
`;
