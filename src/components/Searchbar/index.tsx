import React, { Component } from 'react';

import SearchIcon from '@/assets/icons/search.png';
import { InputGroup } from '@/components/InputGroup';
import { InputLeftElement } from '@/components/InputGroup/InputLeftElement';
import { TextInput } from '@/components/Inputs/TextInput';

import { FormLabel } from '../InputGroup/FormLabel';

import { ISearchbarState } from './interface';

import './style.css';

export class Searchbar extends Component<ISearchbarState> {
  state = {
    query: '',
  };

  handleSearchChange = (value: string) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <InputGroup>
        <InputLeftElement>
          <img className="search-icon" src={SearchIcon} alt="search" />
        </InputLeftElement>
        <FormLabel htmlFor="search" />
        <TextInput
          placeholder="Search..."
          localStorageKey="searchQuery"
          id="search"
          name="search"
          onChange={this.handleSearchChange}
        />
      </InputGroup>
    );
  }
}
