import { Controller } from "react-hook-form";
import { Input } from "./input";

type TInputProps = {
  name: string;
  type: string;
  // label?: string;
  placeholder?: string;
};
const CustomInput = ({ name, type, placeholder }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Input placeholder={placeholder} {...field} type={type} required />
      )}
    />
  );
};

export default CustomInput;
