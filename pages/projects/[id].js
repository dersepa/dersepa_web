import ProjectContent from "../../components/Project_Detail/ProjectContent";
import ProjectImages from "../../components/Project_Detail/ProjectImages";
import { useEffect, useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Cookies from "cookies";
import { BASE_URL } from "../../components/_utils";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  removeDiacritics,
  removeSpecialCharacter,
} from "../../components/_utils";

function ProjectDetail(props) {
  const [language, setLanguage] = useState("");
  const router = useRouter();

  // console.log("SSR data", props.data);

  useEffect(() => {
    // console.log("router query id", router.query.id.split("_")[1]);
    getProjectById(router.query.id.split("_")[1]);
    // console.log("re rendering the project", props);
    // console.log("re rendering the project", router);
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
      // const res = await axios.get(BASE_URL + `/Projects/${id}`);
      // setProject(res.data);
      // const allIds = await axios.get(BASE_URL + "/Projects/allids");
      // console.log("ids ===>>", allIds.data);
      // console.log("index ===>>", allIds.data.indexOf(Number(id)));
      // const nextIdIndex = allIds.data.indexOf(Number(id)) + 1;
      // const nextProject = await axios.get(
      //   BASE_URL + `/Projects/${allIds.data[nextIdIndex]}`
      // );
      // setNextProject(nextProject.data);
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <>
    <div>
      <NextSeo
        openGraph={{
          images: [ { url: BASE_URL + props.data.cover_image.url, width: 800, height: 600, alt: "Og Image Alt", }, ],
          title: props.data.title, description: props.data.description,
        }}
      />
      <ProjectContent setLanguage={setLanguage} project={props.data} />
      <ProjectImages
        language={language}
        project={props.data}
        nextProject={props.data2}
        type="projects"
      />
    </div>
    <Head>
      <title>Dersepa Studio Projects - {language === "pt" ? props.data.title_portuguese : props.data.title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:url" content={"https://www.dersepa.com/projects/" + removeDiacritics(props.data.title).split(" ").join("-") + "_" + props.data.id} />
    </Head>
    </>
  );
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get projects
//   const projectsRes = await fetch(BASE_URL + "/projects");
//   const projects = await projectsRes.json();

//   // Get the paths we want to pre-render based on projects
//   const paths = projects.map((project) => ({
//     params: {
//       id: `${removeDiacritics(project.title).split(" ").join("-")}_${
//         project.id
//       }`,
//       length: projects.length.toString(),
//     },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  console.log(params);
  const id = params.id.split("_");

  const response = await axios.get(BASE_URL + `/Projects/${id[1]}`);

  const allIds = await axios.get(BASE_URL + "/Projects/allids");

  const nextIdIndex = allIds.data.indexOf(Number(id[1])) + 1;

  let data2 = null;
  if (nextIdIndex !== allIds.data.length) {
    const nextProject = await axios.get(
      BASE_URL + `/Projects/${allIds.data[nextIdIndex]}`
    );
    data2 = nextProject.data;
  }
  const data = response.data;

  if (params.id !== `${removeDiacritics(data.title).split(" ").join("-")}_${data.id}`) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props:{},
    };
    
  }

  return { props: { data, data2 } };
}

// export async function getServerSideProps({ query }) {
//   // console.log("context ===>>>", query);
//   // // Create a cookies instance
//   // const cookies = new Cookies(req, res);
//   // // Fetch data from external API
//   // const id = cookies.get("projectId");
//   const id = query.id.split("_");

//   const response = await axios.get(BASE_URL + `/Projects/${id[1]}`);

//   const allIds = await axios.get(BASE_URL + "/Projects/allids");

//   const nextIdIndex = allIds.data.indexOf(Number(id[1])) + 1;

//   let data2 = null;
//   if (nextIdIndex !== allIds.data.length) {
//     const nextProject = await axios.get(
//       BASE_URL + `/Projects/${allIds.data[nextIdIndex]}`
//     );
//     data2 = nextProject.data;
//   }
//   const data = response.data;

//   // Pass data to the page via props
//   return { props: { data, data2 } };
// }







const mapStateToProps = (state) => ({
  ids: state,
  projects: state.Projects,
});

export default ProjectDetail;
