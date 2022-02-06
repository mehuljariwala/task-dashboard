import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/styles";
import TableSearch from "../override/TableSearch";
import { Add, FilterList } from "@mui/icons-material";
import { getColumns, MuiOverrideTheme, StyledMUI } from "../helpers";
import { loadTasks } from "../redux/actions";

const Tasks = () => {
  const {
    tasks: { list },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const getOptions = useCallback(() => {
    return {
      filter: true,
      selectableRows: false,
      filterType: "dropdown",
      responsive: "vertical",
      rowsPerPage: 10,
      search: true,
      searchOpen: true,
      searchPlaceholder: "Search by",
      viewColumns: false,
      customToolbar: () => {
        return (
          <div>
            <Button variant="contained" endIcon={<Add />}>
              Add new
            </Button>
          </div>
        );
      },
      customSearchRender: (searchText, handleSearch, hideSearch, options) => (
        <TableSearch {...{ searchText, handleSearch, hideSearch, options }} />
      ),
      print: false,
    };
  }, []);

  const getComponents = useCallback(() => {
    return {
      icons: {
        FilterIcon: FilterButton,
      },
    };
  }, []);

  const FilterButton = () => {
    return (
      <Button variant="outlined" endIcon={<FilterList />}>
        Filter
      </Button>
    );
  };

  return (
    <div>
      <Typography variant="h3" fontWeight={500}>
        Tasks
      </Typography>
      <Box
        sx={{
          p: 1,
        }}
      >
        <b>16</b> Tasks Assigned to you
      </Box>
      <Box sx={{ mt: "24px" }}>
        <ThemeProvider theme={MuiOverrideTheme}>
          <StyledMUI
            title={"Task List"}
            {...{
              data: list,
              columns: getColumns(),
              options: getOptions(),
              components: getComponents(),
            }}
          />
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default Tasks;
