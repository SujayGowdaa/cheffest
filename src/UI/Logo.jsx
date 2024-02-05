/* eslint-disable react/prop-types */
const logo =
  'https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/logo/cheffest.png?t=2024-02-03T16%3A53%3A44.093Z';

export default function Logo({ size = ' w-[100px]' }) {
  return (
    <div className={` ${size}`}>
      <img
        // className={` w-[${size}px]`}
        className=' w-full'
        src={logo}
        alt='cheffest the fast food and grill'
      />
    </div>
  );
}
