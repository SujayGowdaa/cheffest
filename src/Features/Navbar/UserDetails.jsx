import { useAppContext } from '../../store/AppContext';

export default function UserDetails() {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className='text-md flex items-center gap-2 cursor-pointer select-none'
      onClick={handleClick}
    >
      <img
        src='https://placehold.co/40'
        alt='placeholder'
        className=' rounded-full'
      />
      <div>
        <span className=' text-Grey font-normal '>Welcome, </span>
        <span className=' font-semibold text-DarkGrey'>SUJAY</span>
      </div>
    </div>
  );
}
