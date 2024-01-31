import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { logo } from "../globalVariables";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export default function Navbar() {
  const { setIsCartOpen } = useAppContext();

  return (
    <>
      <header className=" outline:LightGrey border-LightGrey-3 fixed top-0 w-full z-30 flex h-[120px] max-w-max items-center justify-between border-b-2 border-LightGrey bg-White  px-20 shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)]">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="cheffest" className=" w-[110px]" />
          </Link>
        </div>
        <div>
          <div className=" flex items-center gap-10 ">
            <div className=" flex gap-6">
              <Link to={"search"}>
                <FiSearch className=" text-Grey cursor-pointer text-3xl" />
              </Link>
              <div className=" relative">
                <span className="num-of-items flex items-center justify-center text-sm font-medium text-White">
                  3
                </span>

                <FiShoppingCart
                  className=" text-Grey cursor-pointer text-3xl "
                  onClick={() =>
                    setIsCartOpen((ps) => (ps === true ? false : true))
                  }
                />
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
      <div className=" h-[120px] max-w-max  border-b-2 border-LightGrey bg-White  px-20"></div>
    </>
  );
}
