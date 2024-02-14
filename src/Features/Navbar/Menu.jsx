import { Link } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useAppContext } from '../../store/AppContext';
import useLogout from '../Authentication/useLogout';

export default function Menu() {
  const { isMenuOpen, setIsMenuOpen, setIsCartOpen } = useAppContext();
  const { logout } = useLogout();

  return (
    <div
      className={` ${isMenuOpen ? ' inline-block' : 'hidden'} absolute z-50 top-[45px] left-0 rounded-md outline outline-[1px] outline-Grey/50 overflow-hidden shadow-xl bg-White select-none sm:top-[60px]`}
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
        setIsCartOpen(false);
      }}
    >
      <Link
        className=' flex items-center gap-2 px-6 py-2 outline outline-[1px] outline-LightGrey text-sm  justify-between text-Grey hover:bg-LightGrey hover:text-MediumGrey transition duration-150 tracking-wide font-light '
        to={'/profile'}
      >
        Profile
        <FaUserCog className=' text-[16px]' />
      </Link>
      <div
        className=' flex items-center gap-2 px-6 py-2  cursor-pointer text-sm  justify-between text-Grey hover:bg-LightGrey hover:text-MediumGrey transition duration-150 tracking-wide font-light '
        onClick={() => logout()}
      >
        Logout
        <MdLogout className=' text-[16px]' />
      </div>
    </div>
  );
}
