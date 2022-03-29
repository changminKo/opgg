import styled from '@emotion/styled';

type TBadgeColor = {
  theme: {
    bgColor: string;
    borderColor: string;
  }
};

export const KdaWrapper = styled('div')`
  font-size: 11px;
  text-align: center;
`;

export const KDAInfo = styled('div')`
  font-size: 15px;
  font-family: Helvetica;
  color: #879292;
  white-space: nowrap;
  
  & > span {
    font-weight: bold;
  }
  
  & > span:nth-of-type(2) {
    color: #c6443e;
  }
`;

export const RatioInfo = styled('div')`
  margin-top: 6px;
  font-size: 12px;
  font-family: Helvetica;
  font-weight: bold;
  color: #555e5e;
  
  & > span {
    color: #353a3a
  }
`;

export const MultiKillBadge = styled('div')`
  display: inline-block;
  padding: 2px 5px 0;
  margin-top: 8px;
  border: 1px solid #c6443e;
  border-radius: 15px;
  font-size: 10px;
  line-height: 12px;
  color: #f2f2f2;
  background: #ee5a52;
  box-sizing: border-box;
`;

export const MvpBadge = styled('div')`
  display: inline-block;
  padding: 2px 5px 0;
  margin-top: 8px;
  border: solid 1px ${(props: TBadgeColor) => props.theme.borderColor};
  border-radius: 9px;
  font-size: 10px;
  line-height: 12px;
  color: #fff;
  background-color: ${(props: TBadgeColor) => props.theme.bgColor};
  
  &:nth-of-type(4) {
    margin-left: 4px;
  }
`;
