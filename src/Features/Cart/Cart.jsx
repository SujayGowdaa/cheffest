import { useAppContext } from '../../store/AppContext';
import { useCart } from './useCart';

import CartItems from './CartItems';
import SmallLoader from '../../UI/SmallLoader';
import NoData from '../../UI/NoData';

export default function Cart() {
  const {
    isCartOpen,
    isCartLoading,

    handleCloseCart,
  } = useAppContext();
  const { data: cartData } = useCart();

  // Sorting the array of objects based on the 'name' property
  cartData?.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div
        className={`${isCartOpen ? 'open right-0' : 'close right-[-576px]'} transition-all duration-300 absolute z-20 inline-block p-4 bg-White right-0 w-full text-DarkGrey shadow-xl h-screen pointer-events-auto overflow-scroll pb-[220px]`}
      >
        <div className=' cursor-default flex mb-6 gap-6 justify-between'>
          <h2 className=' text-xl font-bold capitalize  '>My orders</h2>
          {isCartLoading && <SmallLoader showLoading={false} />}
        </div>
        <div className=' flex flex-col justify-center items-center gap-8'>
          {cartData?.length < 1 ? (
            <NoData />
          ) : (
            <CartItems cartData={cartData} />
          )}
        </div>
      </div>
      {isCartOpen && (
        <div
          className='pointer-events-auto cursor-pointer h-screen bg-black/20 backdrop-blur-[2px] transition duration-300 hidden sm:block'
          onClick={handleCloseCart}
        ></div>
      )}
    </>
  );
}
