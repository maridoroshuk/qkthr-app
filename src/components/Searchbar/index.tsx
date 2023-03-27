import React, { ChangeEvent, Component } from 'react';

import SearchIcon from '@/assets/icons/search.png';
import { InputGroup } from '@/components/InputGroup';
import { InputLeftElement } from '@/components/InputGroup/InputLeftElement';
import { TextInput } from '@/components/Inputs/TextInput';
import withLocalStorage from '@/hoc/withLocalStorage';

import { FormLabel } from '../InputGroup/FormLabel';

import { ISearchbarState } from './interface';

import './style.css';

class SearchbarComponent extends Component<IInputProps, ISearchbarState> {
  state = {
    query: '',
  };

  handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
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
          value={}
          onChange={this.handleSearchChange}
        />
      </InputGroup>
    );
  }
}

export const Searchbar = withLocalStorage(SearchbarComponent);
