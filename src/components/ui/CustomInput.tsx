type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
};
const CustomInput = ({ name, type, label }: TInputProps) => {
  return (
    <div className="relative w-full">
      <input
        className=" peer border-b border-primary  w-full py-3 text-primary focus:outline-none "
        name={name}
        placeholder=""
        type={type}
      />
      <label
        className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary"
        htmlFor=""
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
