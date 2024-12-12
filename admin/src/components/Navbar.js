import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Typography, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../features/auth/authSlice';
import { toggleSidebar } from '../features/dashboard/dashboardSlice';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate =useNavigate()
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  const { sidebarOpen } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleBlog =()=>{
    navigate('/blog')
  }
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
        <Button color="inherit" onClick={handleBlog}>
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
