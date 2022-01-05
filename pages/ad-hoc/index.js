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
        <meta name="description" content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
      </Head>
    </>
  );
}
