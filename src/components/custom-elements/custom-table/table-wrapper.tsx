import React, { FC } from "react";
import { TableProvider } from "./table-context";
import CustomTable from "./custom-table";

interface Props {
  columns: any[];
  dataUrl?: string;
  data?: any[];
}
const TableWrapper: FC<Props> = (props) => {
  return (
    <TableProvider>
      <CustomTable {...props} />
    </TableProvider>
  );
};

export default TableWrapper;
