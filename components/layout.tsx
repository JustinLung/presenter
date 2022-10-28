import Header from "./Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
