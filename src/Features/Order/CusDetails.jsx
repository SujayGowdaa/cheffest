/* eslint-disable react/prop-types */

export default function CusDetails({ fullName, phoneNumber, address }) {
  return (
    <div className=' flex flex-col gap-4'>
      <h2 className=' text-Green text-xl font-bold uppercase text-center'>
        customer details
      </h2>
      <div className=' flex flex-col gap-3 text-xs capitalize text-Grey'>
        <p>
          Customer Name:
          <span className=' font-medium ml-1 text-sm text-Black uppercase'>
            {fullName}
          </span>
        </p>
        <p>
          Customer phone number:
          <span className=' font-medium ml-1 text-sm text-Black uppercase'>
            {phoneNumber}
          </span>
        </p>

        <p>
          Customer address:
          <span className=' font-medium ml-1 text-sm text-Black uppercase'>
            {address}
          </span>
        </p>
      </div>
    </div>
  );
}
