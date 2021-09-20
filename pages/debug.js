import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Debug({ headers, query }) {
  return (
    <Layout>
      <div className="bgWrap">
        <Image
          alt="background"
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>
      <Head>
        <title>Debug</title>
      </Head>
      <h1 className="mtitle">Debug</h1>
      <div className="content">
        <h2>Request Headers</h2>
        <SyntaxHighlighter
          children={String(headers).replace(/\n$/, "")}
          language="json"
          PreTag="div"
        />

        <h2>Request Query Params</h2>
        <SyntaxHighlighter
          children={String(query).replace(/\n$/, "")}
          language="json"
          PreTag="div"
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const headers = JSON.stringify(context.req.headers, "", 2);
  const query = JSON.stringify(context.query, "", 2);
  return {
    props: {
      headers,
      query,
    },
  };
}
