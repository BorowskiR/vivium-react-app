import React, { useState, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { BeersContext } from 'providers/BeersProvider';

const MySelect = () => {
  const [state, setState] = useState(1);
  const { clearFilter } = useContext(BeersContext);

  const handleChange = async (event: SelectChangeEvent) => {
    setState(event.target.value);
    if (state === 1) {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers?abv_gt=1&abv_lt=4`);
        console.log(data);
        return data;
      } catch (e) {
        clearFilter();
      }
    } else if (state === 2) {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers?abv_gt=4&abv_lt=9`);
        console.log(data);
        return data;
      } catch (e) {
        clearFilter();
      }
    } else if (state === 3) {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers?abv_gt=9`);
        console.log(data);
        return data;
      } catch (e) {
        clearFilter();
      }
    }
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Alcohol</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={state} onChange={handleChange} label="Age">
          <MenuItem value="">
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

export default MySelect;
