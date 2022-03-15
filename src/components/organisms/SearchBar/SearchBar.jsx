import React, { useState, useContext } from 'react';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { Input, FormLabel, List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles, comboboxStyles } from './styles';
import { BeersContext } from 'providers/BeersProvider';

const SearchBar = () => {
  const [matchingBeers, setMatchingBeers] = useState([]);
  const classes = useStyles();
  const { filterBeersByName, clearFilter } = useContext(BeersContext);

  const getMatchingBeers = debounce(async ({ inputValue }) => {
    try {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${inputValue}`);
      const filteredBeers = data.filter(({ name }) => name);
      // filterBeersByName(inputValue);
      setMatchingBeers(filteredBeers);
      return data;
    } catch (e) {
      clearFilter();
    }
  }, 500);

  const { isOpen, getLabelProps, getMenuProps, highlightedIndex, getItemProps, getInputProps, getComboboxProps } = useCombobox({
    items: matchingBeers,
    onInputValueChange: getMatchingBeers,
  });
  return (
    <div>
      <FormLabel {...getLabelProps()}>Choose beer:</FormLabel>
      <div style={comboboxStyles} {...getComboboxProps()}>
        <Input placeholder="Beers" {...getInputProps()} />
      </div>
      <List className={classes.root} {...getMenuProps()}>
        {isOpen &&
          matchingBeers &&
          matchingBeers.map((item, index) => {
            return (
              <ListItem
                key={item.id}
                className={index === highlightedIndex ? classes.highlighted : undefined}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default SearchBar;
