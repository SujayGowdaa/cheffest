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
    <div className=' flex flex-col justify-center h-screen w-screen p-24'>
      <div className=' flex flex-col gap-12 items-center '>
        <div className=' flex flex-col gap-1 items-center'>
          <div className=' w-[300px] overflow-hidden'>
            <img className=' w-full' src={orderPlaced} alt='order placed' />
          </div>

          <h1 className=' text-DarkGrey text-4xl tracking-tight font-extrabold uppercase mb-1'>
            Yay! We have received your order
          </h1>
          <p className=' text-Grey text-lg '>
            Your order will be devlivered soon...
          </p>
        </div>
        <div className=' flex flex-col gap-6  max-w-[800px] w-full '>
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
    </div>
  );
}
