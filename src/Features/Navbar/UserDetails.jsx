import { useAppContext } from '../../store/AppContext';

export default function UserDetails() {
  const { isMenuOpen, setIsMenuOpen, userName, avatar } = useAppContext();
  function handleClick(e) {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className='text-xs flex items-center gap-2 cursor-pointer select-none sm:text-sm'
      onClick={(e) => handleClick(e)}
    >
      <div className=' w-[30px] h-[30px] overflow-hidden rounded-full sm:w-[40px] sm:h-[40px]'>
        <img src={avatar} alt='placeholder' />
      </div>

      <div>
        <span className=' text-Grey font-normal '>Welcome, </span>
        <span className=' font-semibold text-DarkGrey uppercase'>
          {userName?.split(' ')[0] || 'Sujay'}
        </span>
      </div>
    </div>
  );
}
