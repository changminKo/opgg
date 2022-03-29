import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ParticipantsWrapper = styled('div')`
  width: 170px;
  font-size: 0;
  
  &::after {
    display: block;
    clear: both;
    content: ''
  }
`;

export const ParticipantsList = styled('ul')`
  float: left;
  width: 50%;
`;

export const ParticipantsItem = styled('li')`
  display: block;
  width: 80px;
  height: 18px;
  margin-left: 3px;
  text-align: left;
  white-space: nowrap;
`;

export const WrapThumb = styled('div')`
  display: inline-block;
  margin-right: 3px;
  vertical-align: middle;
`;

export const ThumbImage = styled('img')`
  width: 16px;
  height: 16px;
  border-radius: 0;
  vertical-align: middle;
`;

export const WrapName = styled('div')`
  display: inline-block;
  max-width: 60px;
  font-size: 11px;
  vertical-align: middle;
`;

export const Name = styled(Link)`
  display: block;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #555;
`;
