import { useParams } from 'react-router-dom';
import { useGetOrder } from './useGetOrder';
import { orderPlaced } from '../../Utils/GlobalConst';
import LoadingScreen from '../../UI/LoadingScreen';
import CusDetails from './CusDetails';
import Order from './Order';

export default function OrderDetails() {
  const { orderId } = useParams();
  const { data, isLoading } = useGetOrder(orderId);
  const currentOrder = data?.[0];

  if (isLoading) return <LoadingScreen />;

  const {
    orderId: id,
    fullName,
    phoneNumber,
    address,
    cartDetails: {
      cartItems,
      discountPrice,
      totalCartPrice,
      updatedCartPrice,
      isCouponApplied,
    },
  } = currentOrder;

  return (
    <div className=' flex flex-col w-full p-4 gap-6 sm:p-10 items-center justify-center '>
      <div className=' h-[60px] sm:h-[80px] md:h-[100px] '></div>
      <div className=' flex flex-col items-center gap-3'>
        <div className=' w-[200px] h-auto'>
          <img className=' w-auto' src={orderPlaced} alt='order placed' />
        </div>
        <div className=' flex flex-col items-center'>
          <h1 className=' text-DarkGrey text-xl tracking-tight font-extrabold uppercase '>
            Yay! We have received your order
          </h1>
          <p className=' text-Grey text-base'>
            Your order will be devlivered soon...
          </p>
        </div>
      </div>
      <div className=' flex flex-col gap-6 max-w-[800px] w-full '>
        <Order
          id={id}
          cartItems={cartItems}
          discountPrice={discountPrice}
          totalCartPrice={totalCartPrice}
          updatedCartPrice={updatedCartPrice}
          isCouponApplied={isCouponApplied}
        />
        <CusDetails
          fullName={fullName}
          phoneNumber={phoneNumber}
          address={address}
        />
      </div>
    </div>
  );
}
