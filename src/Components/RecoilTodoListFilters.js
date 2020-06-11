import React from "react";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";

import { todoListFilterState } from "../Components/todoListState";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RecoilTodoListFilters() {
  const classes = useStyles();
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select value={filter} onChange={updateFilter}>
        <MenuItem value="Show All">All</MenuItem>
        <MenuItem value="Show Completed">Completed</MenuItem>
        <MenuItem value="Show Uncompleted">Uncompleted</MenuItem>
      </Select>
    </FormControl>
  );
}
