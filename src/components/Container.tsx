import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-2xl mx-auto px-4">{children}</div>;
};
