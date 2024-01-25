/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';

export default function Switch({ color, title }) {
  const [isOn, setIsOn] = useState(false);
  const ref = useRef();

  return (
    <div className=" flex  flex-col gap-2">
      <h3 className=" text-Grey text-sm font-medium">{title}</h3>
      <input className=" hidden" type="checkbox" id={color} ref={ref} />
      <label
        className={`button ${isOn && color}`}
        htmlFor={color}
        onClick={() => setIsOn(!isOn)}
      />
    </div>
  );
}
