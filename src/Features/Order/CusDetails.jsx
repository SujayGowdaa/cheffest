/* eslint-disable react/prop-types */

export default function CusDetails({ fullName, phoneNumber, address }) {
  return (
    <div className=' flex flex-col gap-4 md:gap-6'>
      <h2 className=' text-Green text-xl font-bold uppercase text-center'>
        customer details
      </h2>
      <div className=' flex flex-col gap-2 text-sm capitalize text-Grey'>
        <p>
          Customer Name:
          <span className=' font-medium ml-1 text-Black uppercase'>
            {fullName}
          </span>
        </p>
        <p>
          Customer phone number:
          <span className=' font-medium ml-1 text-Black uppercase'>
            {phoneNumber}
          </span>
        </p>

        <p>
          Customer address:
          <span className=' font-medium ml-1 text-Black uppercase'>
            {address}
          </span>
        </p>
      </div>
    </div>
  );
}
