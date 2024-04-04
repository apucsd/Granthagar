import { Controller, useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
};

const CustomInput = ({ name, type, label, placeholder }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        return (
          <>
            <div className="relative w-full">
              <input
                {...field}
                className="peer border-b mt-3 border-primary w-full py-3 text-primary focus:outline-none"
                placeholder={placeholder || ""}
                type={type}
              />
              <label
                htmlFor={name}
                className="absolute -top-3 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0
              peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400 
              peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary"
              >
                {label}
              </label>
              {errors[name] && ( // Check if errors[name] exists
                <div className="text-red-500  text-nowrap w-full block  text-xs">
                  {(errors[name] as FieldError).message}{" "}
                  {/* Cast errors[name] as FieldError */}
                </div>
              )}
            </div>
          </>
        );
      }}
    />
  );
};

export default CustomInput;
