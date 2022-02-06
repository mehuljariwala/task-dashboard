import React from "react";
import Grow from "@mui/material/Grow";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  (theme) => ({
    main: {
      display: "flex",
      flex: "1 0 auto",
      alignItems: "center",
      backgroundColor: (props) => (props.searchText ? "#fafafa" : "white"),
    },
    searchIcon: {
      color: theme.palette.text.secondary,
      marginRight: "8px",
    },
    searchText: {
      flex: "0.8 0",
    },
    clearIcon: {
      "&:hover": {
        color: theme.palette.error.main,
      },
    },
  }),
  { name: "MUIDataTableSearch" }
);

const TableSearch = ({ options, searchText, handleSearch, onHide }) => {
  const classes = useStyles({ searchText });

  const handleTextChange = (event) => {
    handleSearch(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      onHide();
    }
  };

  const clearIconVisibility = options.searchAlwaysOpen ? "hidden" : "visible";

  return (
    <Grow appear in={true} timeout={300}>
      <div className={classes.main}>
        <SearchIcon className={classes.searchIcon} />
        <TextField
          className={classes.searchText}
          //   autoFocus={true}
          variant={"standard"}
          InputProps={{
            "data-test-id": options.textLabels.toolbar.search,
          }}
          inputProps={{
            "aria-label": options.textLabels.toolbar.search,
          }}
          value={searchText || ""}
          onKeyDown={onKeyDown}
          onChange={handleTextChange}
          fullWidth={true}
          placeholder={options.searchPlaceholder}
          {...(options.searchProps ? options.searchProps : {})}
        />
        {!!searchText && (
          <IconButton
            className={classes.clearIcon}
            style={{ visibility: clearIconVisibility }}
            onClick={() => handleSearch("")}
          >
            <ClearIcon />
          </IconButton>
        )}
      </div>
    </Grow>
  );
};

export default TableSearch;
