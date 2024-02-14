import { useAppContext } from '../../store/AppContext';

export default function UserDetails() {
  const { isMenuOpen, setIsMenuOpen, userName, avatar } = useAppContext();
  function handleClick(e) {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className='text-xs flex items-center gap-2 cursor-pointer select-none '
      onClick={(e) => handleClick(e)}
    >
      <div className=' w-[30px] h-[30px] overflow-hidden rounded-full'>
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
