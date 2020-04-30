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
  
  await cypher(
    `
    CREATE (a:Article {
      title: $title,
      slug: $slug,
      content: $content,
      id: $id,
      timestamp: $timestamp
    })
    WITH a
    UNWIND $courses AS course
    UNWIND $categories AS category
    MERGE(c:Course {name: course})
    MERGE(ca:Category {name: category})
    MERGE (a)-[:BELONGS_TO]->(c)
    MERGE (a)-[:SORTS_UNDER
    ]->(ca)
    `,
    req.body
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
