import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '@/redux/filterSlice'
import {debounce} from 'lodash';

import { SearchBarForm, Input } from './SearchBar.styled';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const [inputValue, setInputValue] = useState(filterValue);

  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setFilter(value));
      }, 500),
    [dispatch]
  );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedDispatch(e.target.value);
  };

    useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  return (
    <>
      <SearchBarForm>
        <Input
          name="inputData"
          value={inputValue}
          onChange={handleChange}
          type="text"
          autoFocus
          autoComplete="on"
          placeholder="Поиск"
        />
      </SearchBarForm>
    </>
  );
};
