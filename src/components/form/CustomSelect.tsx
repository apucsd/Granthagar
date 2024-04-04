import { Controller, useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";
import Select from "react-select";

type TOption = { value: string; label: string };
type TSelectProps = {
  name: string;
  options: TOption[];
};

const CustomSelect = ({ name, options }: TSelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        return (
          <>
            <Select
              styles={{
                control: (base) => ({
                  ...base,
                  width: "100%",
                  height: "100%",
                }),
              }}
              {...field}
              options={options}
            />
            {errors[name] && ( // Check if errors[name] exists
              <span className="text-red-500 text-xs mt-1">
                {(errors[name] as FieldError).message}{" "}
                {/* Cast errors[name] as FieldError */}
              </span>
            )}
          </>
        );
      }}
    />
  );
};

export default CustomSelect;
