import { useSelector } from 'react-redux';
import {RootState} from "../app/store";

const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  return { isAuthenticated, user };
};

export default useAuth;
