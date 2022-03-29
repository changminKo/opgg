import styled from '@emotion/styled';

export const StatsWrapper = styled('div')`
  width: 90px;
  font-size: 11px;
  font-family: Helvetica;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
`;

export const Level = styled('div')`
`;

export const Cs = styled('div')`
  & > span {
    margin-right: 4px;
  }
`;

export const KillInfo = styled('div')`
  color: #c6443e;
`;

export const Mmr = styled('div')`
  & > span {
    display: block;
  }
  
  & > span:nth-of-type(2) {
    font-weight: bold;
    text-transform: capitalize;
    color: #353a3a;
  }
`;
