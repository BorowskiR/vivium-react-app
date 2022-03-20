import React from 'react';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Select from 'components/organisms/SelectByPower/SelectByPower';
import SelectBrewedBefore from 'components/organisms/SelectByDate/SelectBrewedBefore';
import { useStyles } from './styles';

const FilterBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SearchBar />
      <Select />
      <SelectBrewedBefore />
    </div>
  );
};

export default FilterBar;
