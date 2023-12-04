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
        <title>Stanko Tomic | Portfolio</title>
        <meta
          name="description"
          content="Stanko Tomić web developer portfolio website"
        />

        <meta property="og:url" content="https://stanko-tomic.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stanko Tomic | Portfolio" />
        <meta
          property="og:description"
          content="Stanko Tomić web developer portfolio website"
        />
        <meta property="og:image" content="/opengraph.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stanko-tomic.vercel.app" />
        <meta
          property="twitter:url"
          content="https://stanko-tomic.vercel.app/"
        />
        <meta name="twitter:title" content="Stanko Tomic | Portfolio" />
        <meta
          name="twitter:description"
          content="Stanko Tomić web developer portfolio website"
        />
        <meta name="twitter:image" content="/opengraph.jpg" />
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
