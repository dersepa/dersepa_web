import Projects from "../../components/Projects";
import ChatButton from "../../components/ChatButton";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../components/_utils";

function index() {
  useEffect(() => {
    // getAllIds();
  }, []);

  const getAllIds = async () => {
    try {
      const res = await axios.get(BASE_URL + "/Projects/allids");
      // console.log("res", res.data);
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <>
      <ChatButton />
      <Projects />
    </>
  );
}

export default index;
