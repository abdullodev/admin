import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TABLE_FOOTER, TABLE_HEADER } from "./common/constants";
import Row from "./row/row";

const invoices = Array.from({ length: 500 }, (_, i) => ({
  invoice: "INV00" + i,
  paymentStatus: "Paid" + i,
  totalAmount: "$" + (250 + i) + ".00",
  paymentMethod: "Credit Card" + i,
}));

interface Props {
  columns: any[];
  dataUrl?: string;
  data?: any[];
}

function CustomTable({ columns, data, dataUrl }: Props) {
  console.log("data", data);
  console.log("dataUrl", dataUrl);

  return (
    <div className="h-[calc(100vh-130px)] max-h-150 overflow-y-auto relative rounded-md ">
      <Table>
        <TableHeader className={"sticky top-0 " + TABLE_HEADER}>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Actual/Expected</TableHead>
            <TableHead>Slant Range</TableHead>
            <TableHead>Slant Range</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((row) => (
            <Row row={row} key={row.invoice} />
          ))}
        </TableBody>
        <TableFooter className={" " + TABLE_FOOTER}>
          <TableRow>
            <TableCell>Full Amount</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>250 000$</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default CustomTable;
