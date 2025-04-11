import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = Array.from({ length: 50 }, (_, i) => ({
  invoice: "INV00" + i,
  paymentStatus: "Paid" + i,
  totalAmount: "$" + (250 + i) + ".00",
  paymentMethod: "Credit Card" + i,
}));

function CustomTable() {
  return (
    <div className="flex flex-col border rounded-md">
      {/* Fixed Header */}
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead className="w-auto">Status</TableHead>
              <TableHead className="w-auto">Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>

      {/* Scrollable Body */}
      <div className="overflow-auto" style={{ height: "calc(100vh - 220px)" }}>
        <Table>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="w-[100px]">{invoice.invoice}</TableCell>
                <TableCell className="w-auto">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className="w-auto">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Fixed Footer */}
      <div className="mt-auto">
        <Table>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

export default CustomTable;
