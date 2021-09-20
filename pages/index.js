import Head from "next/head";

import Layout from "../components/layout";
import FeatureCard from "../components/featurecard";

export default function Home({ ip, timestamp }) {
  return (
    <Layout footer={`${ip}, ${timestamp}`}>
      <Head>
        <title>Hosting FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Amplify Hosting FAQ</h1>
        <p className="description">Find answers to common questions</p>

        <div className="grid">
          <FeatureCard name="General" icon={"🥑"} href="/general" />
          <FeatureCard name="SSR" icon={"🍔"} href="/ssr" />
          <FeatureCard name="Builds" icon={"🔨"} href="/builds" />
          <FeatureCard name="Custom Domains" icon={"🦄"} href="/builds" />
          <FeatureCard name="Redirect Rules" icon={"🐣"} href="/builds" />
          <FeatureCard name="Backend Envs" icon={"🦍"} href="/builds" />
          <FeatureCard name="Manual Deploys" icon={"✊"} href="/builds" />
          <FeatureCard name="Previews" icon={"👽"} href="/builds" />
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch("https://api.awsdingler.com/v1/hello");
  const json = await data.json();
  return {
    props: {
      timestamp: json.timestamp,
      ip: json.location,
    },
  };
}
