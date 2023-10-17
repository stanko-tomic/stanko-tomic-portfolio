import { NavBar } from "@/components/NavBar";
import { Work_Sans } from "next/font/google";
import { ReactNode, useEffect } from "react";

interface ILayout {
  children?: ReactNode;
}
const workSans = Work_Sans({ subsets: ["latin"] });
const Layout: React.FC<ILayout> = (props) => {
  return (
    <main className={`${workSans.className}`}>
      <NavBar />
      <section>{props.children}</section>
    </main>
  );
};

export default Layout;
