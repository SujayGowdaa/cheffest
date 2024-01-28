import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { logo } from '../globalVariables';

export default function Navbar() {
  return (
    <header className=" outline:LightGrey border-LightGrey-3  sticky top-0 z-30 flex h-[120px] max-w-max items-center justify-between border-b-2 border-LightGrey bg-White  px-20 shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)]">
      <div>
        <img src={logo} alt="cheffest" className=" w-[110px]" />
      </div>
      <div>
        <div className=" flex items-center gap-10 ">
          <div className=" flex gap-6">
            <FiSearch className=" text-Grey cursor-pointer text-3xl" />
            <div className=" relative">
              <span className="num-of-items flex items-center justify-center text-sm font-medium text-White">
                3
              </span>

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
