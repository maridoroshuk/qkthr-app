import React, { ChangeEvent, useEffect, useState } from 'react';

import SearchIcon from '@/assets/icons/search.png';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { InputLeftElement } from '@/components/InputGroup/InputLeftElement';
import { TextInput } from '@/components/Inputs/TextInput';

import './style.css';

export const Searchbar = () => {
  const [query, setQuery] = useState(() => {
    return localStorage.getItem('searchQuery') || '';
  });

  useEffect(() => {
    return () => localStorage.setItem('searchQuery', query);
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

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
        onChange={handleSearchChange}
      />
    </InputGroup>
  );
};
