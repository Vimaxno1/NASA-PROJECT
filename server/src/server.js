const { loadPlanetsData } = require('./models/planets.model');
const http = require('http');

const PORT = process.env.PORT || 8000;

const app = require('./app');

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}

startServer();
