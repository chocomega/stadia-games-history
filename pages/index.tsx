import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("../components/game"), { ssr: false });

export default function Index() {
  return (
    <>
      <Head>
        <title>Stadia Games History</title>
        <link
          rel="shortcut icon"
          href="//ssl.gstatic.com/stadia/gamers/assets/favicon.ico"
        />
      </Head>

      <Game />
    </>
  );
}
