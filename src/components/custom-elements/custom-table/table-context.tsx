import { createContext, ReactNode, useContext } from "react";

const useTable = () => {
  return { state: {}, actions: {} };
};

const TableContext = createContext<any>({ state: {}, actions: {} });

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const value = useTable();

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableContext = () =>
  useContext<ReturnType<typeof useTable>>(TableContext);
