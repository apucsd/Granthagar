import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
      render={({ field: { onChange } }) => {
        return (
          <>
            <Select onValueChange={(value) => onChange(value)}>
              <SelectTrigger className=" border-b h-12">
                <SelectValue className="uppercase" placeholder={name} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option, i) => (
                    <SelectItem key={i} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        );
      }}
    />
  );
};

export default CustomSelect;
