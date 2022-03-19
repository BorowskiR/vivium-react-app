import React, { useState, useContext, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { BeersContext } from 'providers/BeersProvider';

const SelectByPower = () => {
  const [selectedOption, setSelectedOption] = useState<Number | string>('');
  const { filterByPower } = useContext(BeersContext);

  useEffect(() => {
    if (!selectedOption) return;

    (async () => {
      if (selectedOption === 1) {
        try {
          const { data } = await axios.get(`https://api.punkapi.com/v2/beers?abv_gt=1&abv_lt=4`);
          console.log(data);
          filterByPower(data);
        } catch (e) {
          console.log(e);
        }
      }

      if (selectedOption === 2) {
        try {
          const { data } = await axios.get(`https://api.punkapi.com/v2/beers?abv_gt=4&abv_lt=10`);

          filterByPower(data);
        } catch (e) {
          console.log(e);
        }
      }

      if (selectedOption === 3) {
        try {
          const { data } = await axios.get(`https://api.punkapi.com/v2/beers?abv_gt=10`);

          filterByPower(data);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [selectedOption]);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select">Select by power</InputLabel>
        <Select id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <MenuItem value={''}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>light (0% - 4%)</MenuItem>
          <MenuItem value={2}>strong (4% - 9%)</MenuItem>
          <MenuItem value={3}>very strong (10%+)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectByPower;
