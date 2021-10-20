import AdHoc from "../../components/AdHoc";
import ChatButton from "../../components/ChatButton";

export default function MyAdHoc(props) {
  return (
    <>
      <ChatButton language={props.language} />
      <AdHoc />
    </>
  );
}
