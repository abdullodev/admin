import React from "react";

interface Props {
  children?: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-600 shadow-xs p-4 overflow-hidden animation-fade-in">
      {children}
    </div>
  );
};

export default PageWrapper;
