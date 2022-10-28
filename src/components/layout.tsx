import Header from "./Header";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

export default function Layout({ children }: layoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
