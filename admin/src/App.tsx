import {useAppDispatch} from "./app/store";
import {useEffect} from "react";
import {checkAuth} from "./features/auth/authThunk";
import {ThemeProvider} from "@mui/material";
import theme from "./styles/theme";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth()); // Check auth status on app load
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
