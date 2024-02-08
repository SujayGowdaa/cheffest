import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../store/AppContext';

import Logo from '../../UI/Logo';

import { useCart } from '../Cart/useCart';
import UserDetails from './UserDetails';
import Menu from './Menu';

export default function Navbar() {
  const { data: cartData } = useCart();
  const { setIsCartOpen } = useAppContext();
  const cartLength = cartData?.length;

  function handleClickCart() {
    setIsCartOpen((ps) => (ps === true ? false : true));
  }

  return (
    <header className='pointer-events-auto outline:LightGrey  flex h-[120px] items-center justify-between border-b-[3px] border-LightGrey px-24 bg-White '>
      <div>
        <Link to={'/'}>
          <Logo size='w-[120px]' />
        </Link>
      </div>
      <div>
        <div className=' flex items-center gap-12 '>
          <div className=' flex gap-6'>
            <Link to={'search'}>
              <FiSearch className=' text-Grey cursor-pointer text-3xl' />
            </Link>
            <div className=' relative'>
              <span className='num-of-items flex items-center justify-center text-sm font-medium text-White pt-1'>
                {cartLength}
              </span>
              <FiShoppingCart
                className=' text-Grey cursor-pointer text-3xl '
                onClick={handleClickCart}
              />
            </div>
          </div>
          <div className=' relative'>
            <UserDetails />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
