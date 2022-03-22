import React, { useState, useContext, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './styles';
import { BeersContext } from 'providers/BeersProvider';
import FormControl from '@mui/material/FormControl';
import { useColorMode } from 'providers/ColorModeProvider';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { mode } = useColorMode();
  const classes = useStyles({ mode });
  const { filterByName, clearFilter } = useContext(BeersContext);

  useEffect(() => {
    if (inputValue !== '') {
      filterByName(inputValue);
    } else {
      clearFilter();
    }
  }, [inputValue]);

  return (
    <FormControl className={classes.input} sx={{ m: 1, minWidth: 200 }}>
      <TextField variant="standard" label="Search By Name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </FormControl>
  );
};

export default SearchBar;
