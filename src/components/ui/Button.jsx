import './Button.css';

// eslint-disable-next-line react/prop-types
const Button = ({ btnName, type, onClick, className }) => {
  return (
    <div className='parent w-[100%] relative overflow-x-hidden'>
      <div onClick={onClick} className='btn '></div>
      <span
        onClick={onClick}
        className=' btnSpan absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-2  text-White z-[2] text-md font-QuickSand font-semibold'
      >
        Sign In
      </span>
      <button className={` ${className}`} type={type} onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
