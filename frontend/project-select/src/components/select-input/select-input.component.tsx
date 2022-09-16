import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { IMenuItem } from "../../common/types/types.common";

export interface Props {
  selectedValue: string;
  label: string;
  data: IMenuItem[];
  handleChange: (value: string) => void;
}

export default function SelectInput(props: Props) {
  const { label, selectedValue, data, handleChange } = props;

  const handleChangeLocal = (event: SelectChangeEvent) => {
    handleChange(event.target.value);
  };

  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        </Grid>
        <Grid item xs={7}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="standard"
            value={selectedValue}
            onChange={handleChangeLocal}
            fullWidth
          >
            {data.map((el, index) => {
              return <MenuItem key={index} value={el.value}>{el.label}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}
