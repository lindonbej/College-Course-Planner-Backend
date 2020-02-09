const express = require('express');
const server = express();
const port = 4000;

// Hard coded data

const csID = 1;
const econID = 2;
const csMajor = {
	"id" : csID,
	"name" : "Computer Science"
}
const econMajor = {
	"id" : econID,
	"name" : "Economics"
}
const majors = [
	csMajor,
	econMajor
]
const csProgram = {};
const csSchedule = {};
const econProgram = {
	"courses" : [
		{
			"code" : "rela121",
			"name" : "The Book of Mormon",
			"credits" : 2,
			"type" : "GE",
			"offered" :
				{
					"fall" : true,
					"winter" : true,
					"spring" : true,
					"summer" : true
				},
				"prereqs" : []
		}
		{
			"code" : "econ110",
			"name" : "Economic Principles and Problems",
			"credits" : 3,
			"type" : "major-required",
			"offered" :
				{
					"fall" : true,
					"winter" : true,
					"spring" : true,
					"summer" : true
				},
				"prereqs" : []
		}
		{
			"code" : "econ378",
			"name" : "Statistics for Economists",
			"credits" : 3,
			"type" : "major-required",
			"offered" :
				{
					"fall" : true,
					"winter" : true,
					"spring" : true,
					"summer" : true
				},
				"prereqs" : ["econ110"]
		}
	]
}
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
