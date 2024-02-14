/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { useIncreaseCount } from '../Features/Cart/useIncreaseCount';
import { useDecreaseCount } from '../Features/Cart/useDecreaseCount';
import { useDeleteItem } from '../Features/Cart/useClearCart';
import { useRemoveFromCart } from '../Features/Cart/useRemoveFromCart';
import { useAddToCart } from '../Features/Cart/useAddToCart';
import { placeHolderImage } from '../Utils/GlobalConst';

const Context = createContext();

export default function AppContext({ children }) {
  const { increaseItem, isPending: isIncreasing } = useIncreaseCount();
  const { decreaseItem, isPending: isDecreasing } = useDecreaseCount();
  const { deleteItem, isPending: isDeleting } = useDeleteItem();
  const { addItem, isPending: isAdding } = useAddToCart();
  const { removeItem, isPending: isRemoving } = useRemoveFromCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState(placeHolderImage);
  const [isCoupon, setCoupon] = useState(false);
  const [isCouponApplicable, setIsCouponApplicable] = useState({
    minBillValue: undefined,
    isCouponApplicable: true,
  });
  const [cartDetails, setCartDetails] = useState({});
  const [profile, setProfile] = useState();
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

  const isCartLoading =
    isDecreasing || isIncreasing || isDeleting || isAdding || isRemoving;

  function handleCloseCart() {
    setIsCartOpen(false);
  }
  function handleIncrease(item) {
    increaseItem(item);
  }

  function handleDecrease(item) {
    decreaseItem(item);
  }

  function handleDelete(id) {
    deleteItem(id);
  }

  function handleAddItem(item) {
    addItem(item);
  }

  function handleCheckOut() {
    setIsCartOpen(false);
  }

  document.body.addEventListener('click', () => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    const updateWidth = () => {
      setViewPortWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Context.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        handleDecrease,
        handleIncrease,
        isCartLoading,
        handleCloseCart,
        handleDelete,
        handleAddItem,
        removeItem,
        isMenuOpen,
        setIsMenuOpen,
        userName,
        setUserName,
        avatar,
        setAvatar,
        handleCheckOut,
        isCoupon,
        setCoupon,
        isCouponApplicable,
        setIsCouponApplicable,
        setCartDetails,
        cartDetails,
        profile,
        setProfile,
        viewPortWidth,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAppContext() {
  const context = useContext(Context);
  if (!context) console.log('Please use context within the context provider.');
  return context;
}
