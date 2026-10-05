const app = require("./app");
const port = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => {
  console.log(`QuickBite running at http://localhost:${port}`);
});
server.on("error", (error) => {
  console.error(error.code === "EADDRINUSE"
    ? `Port ${port} is busy. Stop your previous server with Control+C.`
    : error.message);
  process.exit(1);
});
