import React, { ChangeEvent, Component } from 'react';

import SearchIcon from '@/assets/icons/search.png';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { InputLeftElement } from '@/components/InputGroup/InputLeftElement';
import { TextInput } from '@/components/Inputs/TextInput';

import { ISearchbarState } from './interface';

import './style.css';

export class Searchbar extends Component {
  state: ISearchbarState = {
    query: localStorage.getItem('searchQuery') || '',
  };

  handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
  };

  componentWillUnmount() {
    const { query } = this.state;
    localStorage.setItem('searchQuery', query);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <InputGroup>
        <InputLeftElement>
          <img className="search-icon" src={SearchIcon} alt="search" />
        </InputLeftElement>
        <FormLabel htmlFor="search" />
        <TextInput
          placeholder="Search..."
          id="search"
          name="search"
          value={query}
          onChange={this.handleSearchChange}
          localStorageKey="searchQuery"
        />
      </InputGroup>
    );
  }
}
