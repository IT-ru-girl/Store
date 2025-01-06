import { Toolbar, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

import { useNavigate } from "react-router-dom";

import {toggleSidebar} from "../features/dashboard/dashboardSlice";
import {FC, MouseEventHandler} from "react";
import {logout} from "../features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../app/store";

export const Navbar: FC = () => {
  const navigate = useNavigate()
  const drawerWidth = 240;



  const AppBar = styled(MuiAppBar)<{ open?: boolean }>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const { sidebarOpen } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = (e:any) => {
    e.preventDefault();
    dispatch(logout());
  };
  const handleShop = () => {
    navigate('/shop')
  }

  const handleDrawerOpen: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(toggleSidebar());
  };

  return (
      <AppBar position="fixed" open={sidebarOpen}>
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                sidebarOpen && { display: "none" },
              ]}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Manage Courses and Users
          </Typography>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>

          <Button color="inherit" onClick={() => navigate("/blog")}>
            Blog
          </Button>

          <Button color="inherit" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
          <Button color="inherit" onClick={handleShop}>Shop</Button>
        </Toolbar>
      </AppBar>
  );
};
