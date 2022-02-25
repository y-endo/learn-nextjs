import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Layout from "components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first-post</title>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="profile"
      />
    </Layout>
  );
}
