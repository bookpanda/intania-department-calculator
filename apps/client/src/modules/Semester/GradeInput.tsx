import { nameToKey } from "$core/const";
import { useAppContext } from "$core/context/appContext";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

type gradeInputType = {
  name: string;
};

export const GradeInput: FC<gradeInputType> = ({ name }) => {
  const { courses, setCourses } = useAppContext();

  const [gpa, setGpa] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGpa(event.target.value);
    setCourses({ ...courses, [nameToKey[name]]: event.target.value });
  };
  return (
    <div className="flex items-baseline px-4 ">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
        <InputLabel id="subject-label">GPA</InputLabel>
        <Select
          labelId="subject-label"
          id="subject"
          value={gpa}
          onChange={handleChange}
          label="Subject"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={4}>A</MenuItem>
          <MenuItem value={3.5}>B+</MenuItem>
          <MenuItem value={3}>B</MenuItem>
          <MenuItem value={2.5}>C+</MenuItem>
          <MenuItem value={2}>C</MenuItem>
          <MenuItem value={1.5}>D+</MenuItem>
          <MenuItem value={1}>D</MenuItem>
          <MenuItem value={1}>D</MenuItem>
          <MenuItem value={0}>F/W</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
    </div>
  );
};
