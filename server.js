const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Enable CORS
server.use(cors());
server.use(middlewares);

// Add custom body-parser for POST/PUT if needed
server.use(jsonServer.bodyParser);

// Use default router
server.use(router);

// Deploy on environment port or default to 10000 (Render requirements)
const port = process.env.PORT || 10000;

server.listen(port, '0.0.0.0', () => {
    console.log(`JSON Server is running on port ${port}`);
});
