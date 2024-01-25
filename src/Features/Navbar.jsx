import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { logo } from '../globalVariables';

export default function Navbar() {
  return (
    <header className=" outline:LightGrey border-LightGrey-3 flex h-[120px]  items-center  justify-between px-20">
      <div>
        <img src={logo} alt="cheffest" className=" w-[110px]" />
      </div>
      <div>
        <div className=" flex items-center gap-10 ">
          <div className=" flex gap-6">
            <FiSearch className=" text-Grey cursor-pointer text-3xl" />
            <div className=" relative">
              <div className="num-of-items flex items-center justify-center font-medium text-White">
                <span>3</span>
              </div>
              <FiShoppingCart className=" text-Grey cursor-pointer text-3xl " />
            </div>
          </div>
          <div className="text-md flex items-center gap-2">
            <img
              src="https://placehold.co/40"
              alt="placeholder"
              className=" rounded-full"
            />
            <div>
              <span className=" text-Grey font-normal ">Welcome, </span>
              <span className=" font-semibold text-DarkGrey">SUJAY</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
