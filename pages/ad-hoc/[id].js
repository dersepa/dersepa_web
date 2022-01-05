import AdhocContent from "../../components/Adhoc_Detail/AdhocContent";
import AdhocImages from "../../components/Adhoc_Detail/AdhocImages";
import { useEffect, useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Cookies from "cookies";
import { BASE_URL } from "../../components/_utils";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  removeDiacritics,
  removeSpecialCharacter,
} from "../../components/_utils";

function ProjectDetail(props) {
  const [language, setLanguage] = useState("");
  const router = useRouter();

  useEffect(() => {
    getProjectById(router.query.id.split("_")[1]);
    // getProjectById(router.query.id.split("_")[1]);
    // console.log("ids ==>", props.ids);
    // console.log("props ===>>>", props);
  }, [router.query.id]);
  const [project, setProject] = useState([]);
  const [nextProject, setNextProject] = useState([]);

  const getProjectById = async (id) => {
    try {
      const allIds = await axios.get(BASE_URL + "/Projects/allids");
      console.log("allIDs ===>>>", allIds.data);
      // const id = localStorage.getItem("projectId");
      // const res = await axios.get(BASE_URL + `/adhocs/${id}`);
      // setProject(res.data);
      // const allIds = await axios.get(BASE_URL + "/adhocs/allids");
      // console.log("ids ===>>", allIds.data);
      // console.log("index ===>>", allIds.data.indexOf(id));
      // const nextIdIndex = allIds.data.indexOf(Number(id)) + 1;
      // const nextProject = await axios.get(
      //   BASE_URL + `/adhocs/${allIds.data[nextIdIndex]}`
      // );
      // setNextProject(nextProject.data);
    } catch {}
  };

  return (
    <>
    <div>
      <NextSeo
        openGraph={{
          images: [
            {
              url: BASE_URL + props.data.cover_image.url,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          title: props.data.title,
          description: props.data.description,
        }}
      />
      <AdhocContent
        setLanguage={setLanguage}
        project={props.data}
        nextProject={props.data2}
      />
      <AdhocImages language={language} project={props.data} type="ad-hoc" />
    </div>
    <Head>
      <title>{language === "pt" ? props.data.title_portuguese : props.data.title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:url" content={"https://www.dersepa.com/projects/" + removeDiacritics(props.data.title).split(" ").join("-") + "_" + props.data.id} />
    </Head>
    </>
  );
}

export async function getServerSideProps({ query }) {
  // console.log("context ===>>>", query);
  // // Create a cookies instance
  // const cookies = new Cookies(req, res);
  // // Fetch data from external API
  // const id = cookies.get("projectId");
  const id = query.id.split("_");

  const response = await axios.get(BASE_URL + `/adhocs/${id[1]}`);

  const allIds = await axios.get(BASE_URL + "/adhocs/allids");

  const nextIdIndex = allIds.data.indexOf(Number(id[1])) + 1;

  let data2 = null;

  if (nextIdIndex !== allIds.data.length) {
    const nextProject = await axios.get(
      BASE_URL + `/adhocs/${allIds.data[nextIdIndex]}`
    );
    data2 = nextProject.data;
  }

  const data = response.data;

  // Pass data to the page via props
  return { props: { data, data2 } };
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get projects
//   const adhocRes = await fetch(BASE_URL + "/adhocs");
//   const adhocs = await adhocRes.json();

//   // Get the paths we want to pre-render based on projects
//   const paths = adhocs.map((adhoc) => ({
//     params: {
//       id: `${removeDiacritics(adhoc.title).split(" ").join("-")}_${adhoc.id}`,
//       length: adhocs.length.toString(),
//     },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const id = params.id.split("_");

//   const response = await axios.get(BASE_URL + `/adhocs/${id[1]}`);

//   const allIds = await axios.get(BASE_URL + "/adhocs/allids");

//   const nextIdIndex = allIds.data.indexOf(Number(id[1])) + 1;

//   let data2 = null;
//   if (nextIdIndex !== allIds.data.length) {
//     const nextadhoc = await axios.get(
//       BASE_URL + `/adhocs/${allIds.data[nextIdIndex]}`
//     );
//     data2 = nextadhoc.data;
//   }
//   const data = response.data;

//   return { props: { data, data2 }, revalidate: 10 };
// }

export default ProjectDetail;
