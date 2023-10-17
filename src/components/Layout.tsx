import { NavBar } from "@/components/NavBar";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import { ReactNode, useEffect } from "react";

interface ILayout {
  children?: ReactNode;
}
const workSans = Work_Sans({ subsets: ["latin"] });
const Layout: React.FC<ILayout> = (props) => {
  return (
    <>
      <Head>
        <meta name="title" content="hey" />
        <meta
          name="description"
          content="Stanko Tomić web developer portfolio website"
        />
        <meta name="keywords" content="web developer,web design,portfolio" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <main className={`${workSans.className}`}>
        <NavBar />
        <section>{props.children}</section>
      </main>
    </>
  );
};

export default Layout;
