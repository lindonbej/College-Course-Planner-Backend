const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();
const port = 4000;
const bodyParser = require('body-parser');

const CS_ID = 1;
const ECON_ID = 2;
var data = require('./data');

server.use(bodyParser.json());

const Student = mongoose.model('Student', {
	netid: String,
	schedule: String,
	methods: ['GET', 'POST']
});

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

server.get("/schedule/:netid", cors(corsOptions), (req, res) => {
	console.log("entered get");
	mongoose.connect('mongodb://localhost:27017/StudentDB', {
		useNewUrlParser: true
	});
	netid = req.params.netid;
	Student.findOne({'netid': netid}, 'schedule', function(err, schedule) {
		console.log("found netID1");
		if (err) {
			res.status(501);
			res.json({message: "failed"});
		} else {
			res.status(200);
			res.json(schedule.schedule);
		}
	})
})

// POST

server.post("/schedule/:netid", cors(corsOptions), (req, res) => {
	console.log("entered post method");
	schedule = JSON.stringify(req.body);
	netid = req.params.netid;
	mongoose.connect('mongodb://localhost:27017/StudentDB', {
		useNewUrlParser: true
	});
	console.log("passed connect");
	const newStudent = new Student({
		netid: netid,
		schedule: schedule
	});
	async function addStudent() {
		await newStudent.save();
		let students = await Student.find();
		console.log(students);
		res.status(200);
		res.json({message: "worked and stuff"});
	}
	console.log("about to add student");
	addStudent();
})

// Start

server.listen(port, () => {
	console.log(`Server listening at ${port}`);
});
