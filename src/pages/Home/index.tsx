import React, { Component } from 'react';

import { CardList } from '@/components/CardList';
import { Searchbar } from '@/components/Searchbar';

import './style.css';

export class Home extends Component {
  render() {
    return (
      <>
        <Searchbar localStorageKey="searchQuery" />
        <CardList />
      </>
    );
  }
}
