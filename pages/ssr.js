import Head from "next/head";

import Layout from "../components/layout";
import Faq from "../components/faq";

import { getFaqs } from "../lib/reader";

export default function SSR({ faqs }) {
  return (
    <Layout>
      <Head>
        <title>Server Side Rendering</title>
      </Head>
      <h1 className="mtitle">Server Side Rendering</h1>
      <div className="content">
        {faqs.map((faq) => (
          <Faq key={faq.id} question={faq.question}>
            {faq.content}
          </Faq>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const faqs = getFaqs("ssr");
  return {
    props: {
      faqs,
    },
  };
}
