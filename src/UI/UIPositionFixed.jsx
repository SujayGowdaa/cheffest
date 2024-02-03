/* eslint-disable react/prop-types */
export default function UIPositionFixed({ children }) {
  return (
    <div className="fixed overflow-hidden top-0 z-20 max-w-max w-full pointer-events-none">
      <div className="  pointer-events-none h-screen">{children}</div>
    </div>
  );
}
