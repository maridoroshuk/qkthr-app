import React, { Component } from 'react';

import SearchIcon from '@/assets/icons/search.png';
import { InputGroup } from '@/components//InputGroup';
import { Input } from '@/components/Input';

import { InputLeftElement } from '../InputLeftElement';

import './style.css';

export class Searchbar extends Component {
  render() {
    return (
      <InputGroup>
        <InputLeftElement>
          <img className="search-icon" src={SearchIcon} alt="search" />
        </InputLeftElement>
        <Input placeholder="Search..." />
      </InputGroup>
    );
  }
}
