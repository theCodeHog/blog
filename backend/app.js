const express = require("express");
const app = express();
app.use(express.json());

const { cypher, close } = require("./neo4j");

app.get("/rest/articles", async (req, res) => {
  res.json(await cypher("MATCH (a:Article) RETURN a"));
});

app.post("/rest/articles", async (req, res) => {
  await cypher(`
  CREATE (:Article {
    id: $id,
    title: $title,
    slug: $slug,
    content: $content,
    timestamp: $timestamp
  })
  `, req.body)

  res.json({message: "Created the Article"})
});

const server = app.listen(3000, () => console.log("Listening on port 3000."));

const shutdown = async () => {
  console.log("Closing Down");
  await close();
  server.close();
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
