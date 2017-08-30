const express = require('express'),
	  app = express();

let port = 4444;

app.use(express.static('public'));
app.use("/libs", express.static(path.join(__dirname, "/node_modules")));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));