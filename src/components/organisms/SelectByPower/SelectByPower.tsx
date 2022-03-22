import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BeersContext } from 'providers/BeersProvider';
import { useError } from 'hooks/useError';
import { BASE_URL } from 'components/config';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const SelectByPower = () => {
  const [selectedOption, setSelectedOption] = useState<Number | string>('');
  const { filterByPower, clearFilter } = useContext(BeersContext);
  const { dispatchError } = useError();

  useEffect(() => {
    if (!selectedOption || selectedOption === '') {
      clearFilter();
    }

    (async () => {
      if (selectedOption === 1) {
        try {
          const { data } = await axios.get(`${BASE_URL}?abv_gt=1&abv_lt=4`);
          filterByPower(data);
        } catch (e) {
          dispatchError('Something went wrong');
        }
      }

      if (selectedOption === 2) {
        try {
          const { data } = await axios.get(`${BASE_URL}?abv_gt=4&abv_lt=10`);

          filterByPower(data);
        } catch (e) {
          dispatchError('Something went wrong');
        }
      }

      if (selectedOption === 3) {
        try {
          const { data } = await axios.get(`${BASE_URL}?abv_gt=10`);

          filterByPower(data);
        } catch (e) {
          dispatchError('Something went wrong');
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="select">Select by power</InputLabel>
      <Select sx={{ color: 'text.primary' }} id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <MenuItem value={''}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>light (0% - 4%)</MenuItem>
        <MenuItem value={2}>strong (4% - 9%)</MenuItem>
        <MenuItem value={3}>very strong (10%+)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectByPower;
