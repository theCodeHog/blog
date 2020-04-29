const express = require("express");
const app = express();
app.use(express.json());

const { cypher, close } = require("./neo4j");

app.get("/rest/articles", async (req, res) => {
  res.json(await cypher("MATCH (a:Article) RETURN a"));
});

app.get("/rest/courses", async (req, res) => {
  res.json(await cypher("MATCH (c:Course) RETURN c"));
});

app.get("/rest/categories", async (req, res) => {
  res.json(await cypher("MATCH (ca:Category) RETURN ca"));
});

app.post("/rest/articles", async (req, res) => {
  let article = JSON.parse(req.body);
  let articleToCreate = {
    id: article.id,
    title: article.title,
    slug: article.slug,
    content: article.content,
    timestamp: article.timestamp
  }
  let course = article.courses[0];
  let category = article.categories[0];

    await cypher(
      `
    CREATE (a:Article {
      title: $title,
      slug: $slug,
      content: $content,
      id: $id,
      timestamp: $timestamp
    })
    MERGE (c:Course {name: ${course}})
    MERGE (ca:Category {name: ${category}})
    MERGE (a)-[:HAS]->(ca)
    MERGE (a)-[:HAS]->(ca)
    `,
      JSON.stringify(articleToCreate)
    );

  res.json({ message: "Created the Article" });
});

const server = app.listen(3000, () => console.log("Listening on port 3000."));

const shutdown = async () => {
  console.log("Closing Down");
  await close();
  server.close();
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
