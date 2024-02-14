import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../store/AppContext';

import Logo from '../../UI/Logo';

import { useCart } from '../Cart/useCart';
import UserDetails from './UserDetails';
import Menu from './Menu';

export default function Navbar() {
  const { data: cartData } = useCart();
  const { setIsCartOpen } = useAppContext();
  const cartLength = cartData?.length;
  const navigate = useNavigate();

  function handleSearch() {
    navigate('/search');
    setIsCartOpen(false);
  }
  function handleClickCart() {
    setIsCartOpen((ps) => (ps === true ? false : true));
  }

  return (
    <header className='pointer-events-auto outline:LightGrey flex h-[60px] items-center justify-between border-b-[2px] border-LightGrey px-2 bg-White '>
      <div>
        <Link to={'/'}>
          <Logo size='w-[60px]' />
        </Link>
      </div>
      <div className=' flex items-center  gap-6 '>
        <div className=' flex gap-3'>
          <FiSearch
            className=' text-Grey cursor-pointer text-2xl'
            onClick={handleSearch}
          />

          <div className=' relative'>
            <span className=' w-4 h-4 bg-DarkRed right-[-6px] top-[-4px] absolute rounded-full flex items-center justify-center text-xs font-medium text-White '>
              {cartLength}
            </span>
            <FiShoppingCart
              className=' text-Grey cursor-pointer text-2xl '
              onClick={handleClickCart}
            />
          </div>
        </div>
        <div className=' relative self-end'>
          <UserDetails />
          <Menu />
        </div>
      </div>
    </header>
  );
}
