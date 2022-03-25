import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '@apis/getUser';

export const HelloWorld: React.FC = () => {
  const { data } = useQuery(['getUser'], () => getUser());
  console.log('hello world');
  console.log(data);

  return (
    <h1>
      Hello world
    </h1>
  );
};
