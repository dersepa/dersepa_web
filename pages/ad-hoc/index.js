import AdHoc from "../../components/AdHoc";
import ChatButton from "../../components/ChatButton";
import Head from "next/head";

export default function MyAdHoc(props) {
  return (
    <>
      <ChatButton language={props.language} />
      <AdHoc />
      <Head>
        <title>Dersepa Studio Ad-hoc - Stories about Brands and Web design</title>
        <meta property="og:type" content="website" />
      </Head>
    </>
  );
}
