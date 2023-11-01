// eslint-disable-next-line react/prop-types
const Container = ({ children, className }) => {
  return (
    <div className={`${className}  max-w-[1440px] mx-auto `}>{children}</div>
  );
};

export default Container;
