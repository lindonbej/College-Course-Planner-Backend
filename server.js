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
	// warning: accepts requests from all origins
	origin: /.*/,
	optionsSuccessStatus: 200
};

// GET

server.get("/majors", cors(corsOptions), (req, res) => {
	res.json({"majors": data.majors});
});

server.get("/majorProgram/:majorID", cors(corsOptions), (req, res) => {
	const majorID = req.params.majorID;

	if (majorID == CS_ID) {
		res.json({"program": data.csProgram});
	} else if (majorID == ECON_ID) {
		res.json({"program": data.econProgram});
	} else {
		res.status(404);
		res.json({message: `Major ${majorID} doesn't exitst`});
	}
});

server.get("/majorSchedule/:majorID", cors(corsOptions), (req, res) => {
	const majorID = req.params.majorID;

	if (majorID == CS_ID) {
		res.json({"schedule": data.csSchedule});
	} else if (majorID == ECON_ID) {
		res.json({"schedule": data.econSchedule});
	} else {
		res.status(404);
		res.json({message: `Major ${majorID} doesn't exitst`});
	}
});

// Start

server.listen(port, () => {
	console.log(`Server listening at ${port}`);
});
