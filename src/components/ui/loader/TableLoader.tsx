import { TableCell, TableRow } from "../table";

const TableLoader = () => (
  <TableRow>
    <TableCell className="font-medium">
      <div className="bg-gray-200 h-6 w-16 animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="bg-gray-200 h-6 w-24 animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="bg-gray-200 h-6 w-20 animate-pulse"></div>
    </TableCell>
    <TableCell className="">
      <div className="bg-gray-200 h-6 w-12 animate-pulse"></div>
    </TableCell>
    <TableCell className="">
      <div className="bg-gray-200 h-6 w-12 animate-pulse"></div>
    </TableCell>
  </TableRow>
);
export default TableLoader;
