"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FilterByDate = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter By Date" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="-createdAt">Newest</SelectItem>
        <SelectItem value="createdAt">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterByDate;
