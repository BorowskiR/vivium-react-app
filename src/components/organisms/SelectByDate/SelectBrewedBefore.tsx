import React, { useEffect, useState, useContext } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { BeersContext } from 'providers/BeersProvider';

const SelectBrewedBefore = () => {
  const [value, setValue] = useState<Date | null>(null);
  const { filterByBrewedDate } = useContext(BeersContext);

  useEffect(() => {
    if (!value) return;

    const myDate = value;
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    (async () => {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers?brewed_before=${month}-${year}`);
        filterByBrewedDate(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="yyyy-MM"
        views={['year', 'month']}
        label="Brewed before"
        minDate={new Date('2000-03-01')}
        maxDate={new Date('2016-12-01')}
        value={value}
        onChange={setValue}
        renderInput={(params) => <TextField variant="standard" {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

export default SelectBrewedBefore;
