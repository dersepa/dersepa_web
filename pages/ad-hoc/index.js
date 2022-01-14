import AdHoc from "../../components/AdHoc";
import ChatButton from "../../components/ChatButton";
import Head from "next/head";

export default function MyAdHoc(props) {
  return (
    <>
      <ChatButton language={props.language} />
      <AdHoc />
      <Head>
        <title>Ad-hoc articles about design. Inspiration on Brand, web and graphic design by Dersepa.com</title>
        <meta property="og:type" content="website" />
        <meta name="description" content="Ad-hoc articles about design. Inspiration on Brand, web and graphic design by Dersepa.com"
        />
        <meta property="og:title" content="Ad-hoc articles about design. Inspiration on Brand, web and graphic design by Dersepa.com" />
      </Head>
    </>
  );
}
