import MUIDataTable from "mui-datatables";
import { styled } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const StyledMUI = styled(MUIDataTable)({
  "& ": {
    boxShadow: "none",
  },
  "& .MuiInputBase-root": {
    fontFamily: "unset",
  },
  "& .MuiInput-root:before": {
    border: 0,
  },
});

const MuiOverrideTheme = createTheme({
  components: {
    MUIDataTableToolbar: {
      styleOverrides: {
        actions: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        },
      },
    },

    MUIDataTableSearch: {
      styleOverrides: {
        searchText: {
          flex: "auto",
        },
        main: {
          padding: "4px 8px",
          borderRadius: "8px",
          minHeight: 45,
        },
      },
    },
  },
});

const getColumns = () => {
  const renderField = (backgroundColor, color, value) => (
    <Box
      sx={{
        padding: "8px",
        borderRadius: "10px",
        textAlign: "center",
        fontWeight: 500,
        maxWidth: 100,
        margin: "0 auto",
        backgroundColor,
        color: color,
      }}
    >
      {value}
    </Box>
  );

  return [
    {
      name: "taskid",
      label: "Task ID",
    },
    {
      name: "priority",
      label: "Priority",
      options: {
        customBodyRender: (value) =>
          ({
            Important: renderField("#ffc322", "black", value),
            Low: renderField("#74777a", "white", value),
            High: renderField("#dd1d24", "white", value),
          }[value] || renderField("#f1f4f3", "#5f6163", value)),
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value) =>
          ({
            Upcoming: renderField("#f1f4f3", "#6e7170", "Upcoming"),
            Todo: renderField("#f0edf2", "#554268", "To-Do"),
            InProgress: renderField("#e7f3fe", "#296292", "In-Progress"),
            Completed: renderField("#ebf6e7", "#517f3e", "Completed"),
          }[value] || renderField("#f1f4f3", "#34631f", value)),
      },
    },
    { name: "date", label: "Due Date" },
    { name: "mName", label: "Matter Name" },
    { name: "mNumber", label: "Matter Number" },
    { name: "title", label: "Title" },
    { name: "assignee", label: "Assignee" },
  ];
};

const getSidebarRoutes = () => {
  return [
    {
      icon: <InboxIcon />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <InboxIcon />,
      label: "Financials",
      link: "/finacials",
    },
    {
      icon: <InboxIcon />,
      label: "Reporting",
      link: "/reports",
    },
    {
      icon: <InboxIcon />,
      label: "Matters",
      link: "/matters",
    },
    {
      icon: <InboxIcon />,
      label: "Document",
      link: "/document",
    },
    {
      icon: <InboxIcon />,
      label: "Knowledge",
      link: "/knowledge",
    },
    {
      icon: null,
      label: "",
      link: "/",
      divider: true,
    },
    {
      icon: <InboxIcon />,
      label: "Tasks",
      link: "/tasks",
    },
    {
      icon: <InboxIcon />,
      label: "Notification",
      link: "/notification",
    },
    {
      icon: <InboxIcon />,
      label: "Events",
      link: "/events",
    },
  ];
};

export { getSidebarRoutes, StyledMUI, MuiOverrideTheme, getColumns };
