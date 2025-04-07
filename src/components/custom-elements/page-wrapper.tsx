import React from "react";

interface Props {
  children?: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="w-full h-full bg-[var(--sidebar)] rounded-xl border-1 border-[var(--border)] shadow-xs p-4 overflow-hidden animation-fade-in">
      {children}
    </div>
  );
};

export default PageWrapper;
