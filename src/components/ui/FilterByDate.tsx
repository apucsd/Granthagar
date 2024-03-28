"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const FilterByDate = () => {
  const router = useRouter();

  const handleFilterByDate = (value: string) => {
    return router.push(`books?sort=${value}`);
  };
  return (
    <Select onValueChange={(value) => handleFilterByDate(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter By Date" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="-createdAt">All Newest</SelectItem>
        <SelectItem value="createdAt">All Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterByDate;
