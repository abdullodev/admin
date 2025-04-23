import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useRef, useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

// Generic Row Data Interface
interface RowData {
  [key: string]: any;
}

interface CustomTableProps<T extends RowData> {
  columns: ColDef<T>[];
  staticData: T[];
  title?: string;
  pagination?: boolean;
}

function CustomTable<T extends RowData>({
  columns,
  staticData,
  title,
  pagination = false,
}: CustomTableProps<T>) {
  // State for row data with unique IDs
  const [rowData, setRowData] = useState<(T & { __id?: string })[]>(() =>
    staticData.map((row, index) => ({ ...row, __id: `row-${index}` }))
  );

  // Reference to the grid API
  const gridRef = useRef<any>(null);

  // Default column definition
  const defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  // Add the cell renderer to each column
  const enhancedColumns: ColDef<T>[] = columns.map((col) => ({
    ...col,
    cellRenderer: col.cellRenderer,
  }));

  // Handle row click
  const onRowClicked = (event: any) => {
    const clickedRowId = event.data.__id;

    console.log("first clickedRowId", clickedRowId);
  };

  return (
    <div className="flex flex-col min-w-[800px] overflow-auto">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

      <div className="w-full h-120 border border-gray-200 rounded-md">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={enhancedColumns}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="single"
          onRowClicked={onRowClicked}
          getRowId={(params) => params.data.__id}
          masterDetail={true}
          detailRowHeight={200}
          rowHeight={38}
          headerHeight={40}
          pagination={pagination}
          paginationPageSize={20}
        />
      </div>
    </div>
  );
}

export default CustomTable;
