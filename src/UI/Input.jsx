/* eslint-disable react/prop-types */
export default function Input({ title, id, placeholder, register, errors }) {
  return (
    <div className=' flex flex-col gap-1  '>
      <div className=' flex items-center justify-between '>
        <label
          className=' cursor-pointer font-semibold text-DarkGrey '
          htmlFor={id}
        >
          {title}
        </label>
        {errors?.[id]?.message && (
          <p className=' text-Red text-sm'>{errors[id].message}</p>
        )}
      </div>
      <input
        className={`placeholder:text-sm placeholder:capitalize focus:border-none focus:outline-none px-4 py-3 text-sm font-medium text-MediumGrey bg-LightGrey rounded-md placeholder:text-Grey placeholder:font-light`}
        type={id}
        id={id}
        placeholder={placeholder}
        {...register}
        {...(id === 'password' && { autoComplete: 'new-password' })}
        {...(id === 'email' && { autoComplete: 'username' })}
      />
    </div>
  );
}
