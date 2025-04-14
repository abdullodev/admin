import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const Row = ({ row }: { row: any }) => {
  return (
    <TableRow key={row.invoice}>
      <TableCell>{row.invoice}</TableCell>
      <TableCell>{row.paymentStatus}</TableCell>
      <TableCell>{row.paymentMethod}</TableCell>
      <TableCell>{row.totalAmount}</TableCell>
    </TableRow>
  );
};

export default Row;
