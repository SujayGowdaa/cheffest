import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { logo } from "../globalVariables";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";
import { useCart } from "./Cart/useCart";

export default function Navbar() {
  const { data: cartData } = useCart();
  const { setIsCartOpen } = useAppContext();
  const cartLength = cartData?.length;

  function handleClickCart() {
    setIsCartOpen((ps) => (ps === true ? false : true));
  }

  return (
    <header className="pointer-events-auto outline:LightGrey border-LightGrey-3 flex h-[120px] items-center justify-between border-b-2 border-LightGrey px-24 bg-White ">
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
                {cartLength}
              </span>
              <FiShoppingCart
                className=" text-Grey cursor-pointer text-3xl "
                onClick={handleClickCart}
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
  );
}
