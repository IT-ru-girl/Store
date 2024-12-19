import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


import Sidebar from './Sidebar';
import {Navbar} from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
