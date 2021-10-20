import React from "react";
import axios from "axios";
import { removeDiacritics } from "../components/_utils";

const EXTERNAL_DATA_URL_PROJECTS = "https://studio.dersepa.com/projects";
const EXTERNAL_DATA_URL_ADHOCS = "https://studio.dersepa.com/adhocs";

const SITE_URL_PROJECTS = "https://dersepa.com/projects";
const SITE_URL_ADHOCS = "https://dersepa.com/ad-hoc";

const createSitemap = (
  projects,
  adhocs
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${projects
          .map((project) => {
            let idUrl = removeDiacritics(
              `${project.title.split(" ").join("-")}_${project.id}`
            );
            return `
            
                    <url>
                        <loc>${`${SITE_URL_PROJECTS}/${idUrl}`}</loc>
                    </url>
                `;
          })
          .join("")}
          ${adhocs
            .map((adhoc) => {
              let idUrl = removeDiacritics(
                `${adhoc.title.split(" ").join("-")}_${adhoc.id}`
              );
              return `
                    <url>
                        <loc>${`${SITE_URL_ADHOCS}/${idUrl}`}</loc>
                    </url>
                `;
            })
            .join("")}

    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const projectsRes = await axios.get(EXTERNAL_DATA_URL_PROJECTS);
    const projects = projectsRes.data;
    const adhocsRes = await axios.get(EXTERNAL_DATA_URL_ADHOCS);
    const adhocs = adhocsRes.data;

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(projects, adhocs));
    res.end();
  }
}

export default Sitemap;
