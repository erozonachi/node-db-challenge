const express = require('express');
const projectRoute = require('./projects/project-route');

const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use('/api/projects', projectRoute);

server.listen(PORT, () => {
  console.log(`Server running on port:- ${PORT}...`);
});
