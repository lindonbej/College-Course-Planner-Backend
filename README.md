# College-Course-Planner-Backend
Provides API services for the College Course Planner web app


## Web server endpoints for Demo 1

#### To get the list of majors  
Request: `GET "/majors"`  
Response:   
```
{  
 "majors":   
    [  
     <Major object>,   
     <Major object>,   
     . . .   
    ]  
}
```
#### WE NO LONGER USE THIS ONE
#### To get course data for a specific major:
Request: `GET "/major/<majorID>"`  
Response:   
```
{
 "program": <Program object>, 
 "schedule": <Schedule object>
}
```

#### To get program data for a specific major:
Request: `GET "/majorProgram/<majorID>"`  
Response:   
```
{
 "program": <Program object>
}
```

#### To get schedule data for a specific major:
Request: `GET "/majorSchedule/<majorID>"`  
Response:   
```
{
 "schedule": <Schedule object>
}
```

## API JSON objects
#### Major
```
{
 "id": <integer>, 
 "name": <string>
}
```

"id" is a unique identifier  
"name" is "Computer Science: Software Engineering", "Chinese", etc

#### Program
```
{
 "courses": 
    [
     <Course object>, 
     <Course object>, 
     . . . 
    ]
}
```

By convention, the courses will be listed in the following order: GE courses, GE/major-required courses, GE/major-elective courses, major-required courses, major-elective courses.

#### Course
```
{
 "code": <string>, 
 "name": <string>, 
 "credits": <integer>,
 "type": <string>,
 "offered":
    {
     "fall": <bool>, 
     "winter": <bool>, 
     "spring": <bool>, 
     "summer": <bool>
    }  
 "prereqs": 
    [
     <string>, 
     <string>, 
     . . .
    ]
}
```
"code" is "CS 142", "CHIN 201", et   
"name" is "Intro to Computer Programming", "Intermediate Chinese", etc  
"credits" is the number of credits, and we'll assume variable credit courses (like CS 497R) to have the max number of credits as the credit value  
"type" is one of:  
* "GE"  
* "major-required"  
* "major-elective"  
* "GE-major-required"  
* "GE-major-elective  

"fall", "winter", "spring", "summer" are true if the course is offered that semester, false otherwise  
"prereqs" is a list of strings that match the "code" attribute for the associated courses


#### Schedule
```
{
 "semesters": 
    [
     <Semester object>, 
     <Semester object>, 
     . . . 
    ]
}
```
"semesters" is a list of semester objects (see below), one for each semester for which this schedule has courses (so a 4-year schedule with only Fall/Winter courses would have 8 semesters)

#### Semester
```
{
 "year": <string>, 
 "type": <string>, 
 "courses": 
    [
     <string>, 
     <string>,
     . . .
    ]
}
```
"year" is "2020" "2021", etc  
"type" is "spring", "summer", "fall", or "winter"  
"courses" is a list of strings (corresponding to Course."code") for all the courses scheduled for that semester


## Additional endpoints for Demo 2  
`GET "/schedule/<netid>"` - returns JSON representation of saved schedule (a schedule object) for given netid  
`POST "/schedule/<netid>"` - req.body contains JSON representation of saved schedule (a schedule object); response is an ok message or error message  
`{"error": false, "message": "Schedule saved"}`
