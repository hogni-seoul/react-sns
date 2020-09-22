import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>React SNS</title>
      </Head>
      <AppLayout>
        <div>Hello, Next</div>
      </AppLayout>
    </>
  );
}
export default Home;
