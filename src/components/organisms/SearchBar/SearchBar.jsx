import React, { useState, useContext, useEffect } from 'react';
import { Input, FormLabel } from '@material-ui/core';
import { useStyles, comboboxStyles } from './styles';
import { BeersContext } from 'providers/BeersProvider';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();
  const { filterByName, clearFilter } = useContext(BeersContext);

  useEffect(() => {
    if (inputValue !== '') {
      filterByName(inputValue);
    } else {
      clearFilter();
    }

    // (async () => {
    //   try {
    //     const { data } = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${inputValue}`);
    //     const filteredBeers = data.filter(({ name }) => name);
    //     filterByName(inputValue);

    //     console.log('przefiltrowana', filteredBeers);
    //     return data;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // })();
  }, [inputValue]);

  return (
    <div>
      <FormLabel>Choose beer:</FormLabel>
      <div style={comboboxStyles}>
        <Input placeholder="Beers" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
    </div>
  );
};

export default SearchBar;
