import { useForm } from 'react-hook-form';

import Input from '../../UI/Input';
import Button from '../../UI/Button';
import FormMessage from '../../UI/FormMessage';
import BackgroundCover from '../../UI/BackgroundCover';

import { loginBanner01 } from '../../Utils/GlobalConst';
import { useUser } from '../Authentication/useUser';
import { useNewOrder } from './useNewOrder';
import { useAppContext } from '../../store/AppContext';

export default function OrderForm() {
  const { user } = useUser();
  const { newOrder, isPending } = useNewOrder();
  const { cartDetails } = useAppContext();

  const {
    user_metadata: { fullName },
    id,
  } = user;
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      fullName: fullName,
      phoneNumber: '0123456789',
      address: '#007, Dummy street, Dummy Address, 00700',
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    const { fullName, phoneNumber, address } = data;
    const orderDetails = {
      userId: id,
      fullName,
      phoneNumber,
      address,
      cartDetails,
    };
    newOrder(orderDetails);
  }

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <div className=' h-[120px]'></div>
      <div className=' flex flex-col gap-12 outline outline-1 bg-White outline-Grey/40 rounded-xl p-24 shadow-lg'>
        <FormMessage
          title={'Place your order'}
          message={'Only one step away to enjoy the tasty meal...'}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=' flex flex-col gap-12 w-[500px]'
        >
          <div className=' flex flex-col gap-6 w-[500px]'>
            <Input
              title={'Full Name'}
              id={'fullName'}
              placeholder={'Your name'}
              register={register('fullName', {
                required: 'This field is required',
              })}
              errors={errors}
            />
            <Input
              title={'Phone Number'}
              id={'phoneNumber'}
              type={'number'}
              placeholder={'Your number'}
              register={register('phoneNumber')}
            />
            <Input
              title={'Address'}
              id={'address'}
              placeholder={'Your Address'}
              register={register('address', {
                required: 'This field is required',
              })}
              errors={errors}
            />
          </div>
          <Button isPending={isPending} disabled={isPending} type='checkout'>
            Order
          </Button>
        </form>
      </div>
      <BackgroundCover loginBanner01={loginBanner01} />
    </div>
  );
}
