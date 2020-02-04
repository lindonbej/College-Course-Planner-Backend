const express = require('express');
const server = express();
const port = 4000;

// Hard coded data

const csID = 1;
const econID = 2;
const majors = [];
const csProgram = {};
const csSchedule = {};
const econProgram = {};
const econSchedule = {};

// GET

server.get("/majors", (req, res) => {
	res.json({"majors": majors});
});

server.get("/major/:majorID", (req, res) => {
	const majorID = req.params.majorID;

	if (majorID == csID) {
		res.json({"program": csProgram, "schedule": csSchedule});
	} else if (majorID == econID) {
		res.json({"program": econProgram, "schedule": econSchedule});
	} else {
		res.json({message: `Major ${majorID} doesn't exitst`});
	} 
});

server.listen(port, () => {
	console.log(`Server listening at ${port}`);
});
