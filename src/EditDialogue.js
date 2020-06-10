import React, { Fragment, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2),
    color: "Black"
  },
  iconHover: {
    "margin": theme.spacing(2),
    "&:hover": {
      color: "red"
    }
  }
}));

const EditDialogue = props => {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState(props.employee);
  const classes = useStyles();

  const handleChange = name => event => {
    setEmployee({
      ...employee,
      [name]: event.target.value
    });
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Button onClick={() => setOpen(!open)}>
          <Edit className={classes.icon} />
        </Button>
      </div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter any edits below.</DialogContentText>
          <form>
            <div className="input-group">
              <TextField
                onChange={handleChange("ename")}
                className="input"
                name="ename"
                value={employee.ename}
                type="text"
                label="Employee Name"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange("job")}
                name="job"
                value={employee.job}
                className="input"
                type="text"
                label="Job Title"
              />
            </div>
            <div>
              <TextField
                onChange={handleChange("sal")}
                name="sal"
                value={employee.sal}
                className="input"
                type="number"
                label="Monthly Salary"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(!open)}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={function() {
              props.onEdit(employee);
              setOpen(!open);
              //setEmployee({ empno: "", ename: "", job: "", sal: "" });
            }}
          >
            Submit Edit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default EditDialogue;
