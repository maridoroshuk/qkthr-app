import React from 'react';

import { CardList } from '@/components/CardList';
import { Searchbar } from '@/components/Searchbar';

import './style.css';

export const Home = () => {
  return (
    <>
      <Searchbar />
      <CardList />
    </>
  );
};
