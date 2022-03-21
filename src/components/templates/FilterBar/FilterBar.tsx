import React from 'react';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Select from 'components/organisms/SelectByPower/SelectByPower';
import { Paper } from '@material-ui/core';
import SelectBrewedBefore from 'components/organisms/SelectByDate/SelectBrewedBefore';
import { useStyles } from './styles';
import { useColorMode } from 'providers/ColorModeProvider';

const FilterBar = () => {
  const { mode } = useColorMode();
  const classes = useStyles(mode);
  console.log(mode);
  return (
    <Paper className={classes.wrapper}>
      <SearchBar />
      <Select />
      <SelectBrewedBefore />
    </Paper>
  );
};

export default FilterBar;
