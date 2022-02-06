import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AcUnit, Search } from "@mui/icons-material";
import useStyles from "./sidebar.styles";
import { ListItemButton } from "@mui/material";
import { getSidebarRoutes } from "../../helpers";

const drawerWidth = 260;

const Sidebar = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onRouteClick = (routeToRedirect) => {
    let path = `${routeToRedirect}`;
    navigate(path);
  };

  const renderSearchbar = () => {
    return (
      <Box className={classes.rootSearch}>
        <Search />
        <input
          type="text"
          placeholder="Search"
          className={classes.searchInput}
        />
      </Box>
    );
  };

  const renderRouteList = () => {
    return (
      <Box>
        <Box sx={{ m: 1 }}>
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                margin: 3,
                display: "flex",
                "& .MuiSvgIcon-root": {
                  color: "#2edf45",
                  height: "1.3em",
                  width: "1.3em",
                },
              }}
            >
              <AcUnit fontSize="large" color="#c3c311" />
            </Box>
            {renderSearchbar()}
          </Box>
          <Divider className={classes.divier} />
          <List>
            {getSidebarRoutes().map((route, index) => {
              if (route?.label) {
                return (
                  <ListItemButton
                    key={index}
                    onClick={() => onRouteClick(route.link)}
                    className={cx({
                      [classes.activeItem]: location.pathname === route.link,
                    })}
                  >
                    <ListItemIcon>{route?.icon}</ListItemIcon>
                    <ListItemText primary={route?.label} />
                  </ListItemButton>
                );
              }
              return <Divider sx={{ margin: "24px 0px" }} />;
            })}
          </List>
        </Box>
        <div className={classes.accountList}>
          <ListItemButton>
            <ListItemIcon>{<InboxIcon />}</ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </div>
      </Box>
    );
  };

  const renderMobileView = () => {
    return (
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {renderRouteList()}
      </Drawer>
    );
  };

  const renderDesktopView = () => {
    return (
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {renderRouteList()}
      </Drawer>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {renderMobileView()}
        {renderDesktopView()}
      </Box>
      {children}
    </Box>
  );
};

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
