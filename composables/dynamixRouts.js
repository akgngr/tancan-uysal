import moment from "moment";

export default async () => {
  const data = await fetch("http://localhost:3000/api/sitemap_routes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  let writeData = data.map((data) => {
    return `
        <url>
          <loc>${"/blog/" + data.slug}</loc>
          <lastmod>${moment(data.publishedAt).format("YYYY-MM-DD")}</lastmod>
        </url>`;
  });
  return writeData;
};
