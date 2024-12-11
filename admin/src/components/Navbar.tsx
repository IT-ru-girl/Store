import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Typography, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../features/auth/authSlice';
import { toggleSidebar } from '../features/dashboard/dashboardSlice';
import {RootState} from "../app/store";

interface AppBarType {
  open?: boolean;
}

const Navbar = () => {



  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
  })<AppBarType>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),

  }));

  const { sidebarOpen } = useSelector((state:RootState) => state.dashboard);
  const dispatch = useDispatch();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement> )=> {
    e.preventDefault();
    dispatch(logout());
  };
  const handleDrawerOpen = () => {
    dispatch(toggleSidebar(sidebarOpen));
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
            sidebarOpen && { display: 'none' },
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
