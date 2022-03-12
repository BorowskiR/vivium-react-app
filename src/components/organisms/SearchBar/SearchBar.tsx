import React, { useState } from 'react';
import { useCombobox } from 'downshift';
// import debounce from 'lodash.debounce';
import axios from 'axios';
import { Input, IconButton, FormLabel, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { items, useStyles, comboboxStyles } from './styles';
const findBeers = async (searchPhrase: string) => {
  try {
    const { data } = await axios.post(`https://api.punkapi.com/v2/beers?beer_name=${searchPhrase}`);
    return data;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const SearchBar = () => {
  //   const [matchingBeers, setMatchingBeers] = useState([]);
  const classes = useStyles();
  const [inputItems, setInputItems] = useState(items);
  const itemToString = (item) => (item ? item.primary : '');
  //   const getMatchingBeers = debounce(async ({ inputValue }) => {
  //     const response = await findBeers(inputValue);
  //     console.log(response);
  //     setMatchingBeers(response.data);
  //   }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps, getInputProps, getComboboxProps } = useCombobox({
    items: inputItems,
    itemToString,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(items.filter((item) => itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase())));
    },
  });
  return (
    <div>
      <FormLabel {...getLabelProps()}>Choose an employee:</FormLabel>
      <div style={comboboxStyles} {...getComboboxProps()}>
        <Input placeholder="Employees" {...getInputProps({ refKey: 'inputRef' })} />
        <IconButton color="secondary" className={classes.button} {...getToggleButtonProps()}>
          <ExpandMoreIcon className={classes.rightIcon} />
        </IconButton>
      </div>
      <List className={classes.root} {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => {
            return (
              <ListItem
                key={`${item.primary}-${index}`}
                className={index === highlightedIndex ? classes.highlighted : undefined}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                <ListItemText primary={item.primary} secondary={item.secondary} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default SearchBar;
