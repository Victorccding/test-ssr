import Head from "next/head";

import Layout from "../components/layout";
import Faq from "../components/faq";

import { getFaqs } from "../lib/reader";

export default function General({ faqs }) {
  return (
    <Layout>
      <Head>
        <title>General Questions</title>
      </Head>
      <h1 className="mtitle">General Questions</h1>
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
  const faqs = getFaqs("general");
  return {
    props: {
      faqs,
    },
  };
}
