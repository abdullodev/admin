import { CustomTable, PageWrapper } from "@/components";
import type { ColDef } from "ag-grid-community";

interface CarData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
  year: number;
  color: string;
}

const Settings = () => {
  // Define your columns
  const carColumns: ColDef<CarData>[] = [
    {
      field: "make",
      headerName: "Manufacturer",
      filter: "agTextColumnFilter",
    },
    {
      field: "model",
      headerName: "Model",
    },
    {
      field: "price",
      headerName: "Price ($)",
      valueFormatter: (params) => `$${params.value.toLocaleString()}`,
    },
    {
      field: "electric",
      headerName: "Electric Vehicle",
      cellRenderer: (params: any) => (params.value ? "✓" : "✗"),
    },
    {
      field: "year",
      headerName: "Year",
    },
  ];

  // Your static data
  const carData: CarData[] = Array.from({ length: 5000 }, (_, index) => ({
    make: `Make ${index + 1}`,
    model: `Model ${index + 1}`,
    price: Math.floor(Math.random() * 100000),
    electric: Math.random() < 0.5,
    year: Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000,
    color: `Color ${index + 1}`,
  }));

  return (
    <PageWrapper>
      <CustomTable
        columns={carColumns}
        staticData={carData}
        title="Vehicle Database"
      />
    </PageWrapper>
  );
};

export default Settings;
