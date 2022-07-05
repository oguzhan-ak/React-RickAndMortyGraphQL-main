import "./App.css";
import RickAndMortyCharacters from "./characters/RickAndMortyCharacters";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import React, { useRef, useEffect, useState } from "react";
import PopupDialog from "./components/PopupDialog";

const  App = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [hit, setHit] = useState(false);
  const [page, setPage] = React.useState(0);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHit(entry.isIntersecting);
    });
    observer.observe(triggerRef.current!);
  }, []);

  useEffect(() => {
    if (hit) {
      setPage(page + 1);
    }
  }, [hit]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value : any) => {
    debugger;
    setOpen(false);
    if (value !== selectedValue) {
      setPage(0);
    }
    setSelectedValue(value);
  };

  return (
    <div className="App">
      <div style={{ marginLeft: "80px" }}>
        <h3>
          <b>{selectedValue === "" ? "Rick And Morty" : selectedValue}</b>
          <FilterAltIcon
            onClick={handleClickOpen}
            style={{ verticalAlign: "middle", cursor: "pointer" }}
          />
        </h3>
      </div>
      <RickAndMortyCharacters page={page} selectedValue={selectedValue} />
      <div ref={triggerRef}></div>
      <PopupDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
