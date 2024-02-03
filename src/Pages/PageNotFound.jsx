import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className=" h-screen max-w-max flex justify-center items-center font-semibold  text-3xl">
      <div className=" flex flex-col gap-4">
        <p>Page not found</p>
        <button
          className=" outline outline-Grey rounded-md"
          onClick={handleClick}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
