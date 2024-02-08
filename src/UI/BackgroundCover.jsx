/* eslint-disable react/prop-types */

export default function BackgroundCover({ loginBanner01 }) {
  return (
    <div className=" flex items-center h-screen w-screen overflow-hidden absolute z-[-10] top-0 ">
      <img
        src={loginBanner01}
        alt="banner"
        className="object-cover h-[100vh] w-[100vw] brightness-50 contrast-[0.9] blur-sm  scale-[1.02] "
      />
    </div>
  );
}
