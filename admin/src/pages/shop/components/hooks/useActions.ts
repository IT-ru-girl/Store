import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cartActions } from '../../slice/cartSlice.tsx';
import { productsActions } from '../../slice/productSlice.tsx';


const allActions = {
  ...cartActions,
  ...productsActions
};


export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
