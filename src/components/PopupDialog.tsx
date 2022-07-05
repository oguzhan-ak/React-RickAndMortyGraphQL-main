import * as React from "react";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import Divider from "@mui/material/Divider";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../App.css";
import "./PopupDialog.css";

const choices = ["Rick", "Morty"];

function PopupDialog(props: any) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value : any) => {
    onClose(value);
  };

  return (
    <Dialog style={{ borderRadius: "30px" }} onClose={handleClose} open={open}>
      <DialogTitle style={{ width: "300px" }}>
        Filter
        <span
          onClick={handleClose}
          style={{ float: "right", cursor: "pointer" }}
        >
          X
        </span>
      </DialogTitle>
      <Divider />
      <List sx={{ pt: 0 }}>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            value={selectedValue}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {choices.map((choice) => (
              <FormControlLabel
                key={choice}
                checked={selectedValue === choice}
                value={choice}
                control={<Radio />}
                onClick={() => handleListItemClick(choice)}
                label={choice}
                labelPlacement="start"
                className="splitted"
              />
            ))}
          </RadioGroup>
        </FormControl>
      </List>
    </Dialog>
  );
}

export default PopupDialog;
