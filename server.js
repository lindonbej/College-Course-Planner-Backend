const express = require('express');
const cors = require('cors');
const server = express();
const port = 4000;

const CS_ID = 1;
const ECON_ID = 2;
var data = require('./data');

// CORS support

server.use(cors());
var corsOptions = {
	origin: /http:\/\/localhost:\d*/,
	optionsSuccessStatus: 200
};

// GET

server.get("/majors", cors(corsOptions), (req, res) => {
	res.json({"majors": data.majors});
});

server.get("/major/:majorID", cors(corsOptions), (req, res) => {
	const majorID = req.params.majorID;

	if (majorID == CS_ID) {
		res.json({"program": data.csProgram, "schedule": data.csSchedule});
	} else if (majorID == ECON_ID) {
		res.json({"program": data.econProgram, "schedule": data.econSchedule});
	} else {
		res.status(404);
		res.json({message: `Major ${majorID} doesn't exitst`});
	}
});

// Start

server.listen(port, () => {
	console.log(`Server listening at ${port}`);
});
