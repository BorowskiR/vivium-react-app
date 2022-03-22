import React from 'react';
import { useColorMode } from 'providers/ColorModeProvider';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Select from 'components/organisms/SelectByPower/SelectByPower';
import SelectBrewedBefore from 'components/organisms/SelectByDate/SelectBrewedBefore';
import { Paper } from '@material-ui/core';
import { useStyles } from './styles';

const FilterBar = () => {
  const { mode } = useColorMode();
  const classes = useStyles({ mode });

  return (
    <Paper className={classes.wrapper}>
      <SearchBar />
      <Select />
      <SelectBrewedBefore />
    </Paper>
  );
};

export default FilterBar;
