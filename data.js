const CS_ID = 1;
const ECON_ID = 2;

module.exports = {
   majors: [
      {
         "id" : CS_ID,
         "name" : "Computer Science"
      },
      {
         "id" : ECON_ID,
         "name" : "Economics"
      }
   ],
   csProgram: {
      "courses":
      [
          {
              "code": "CS 142",
              "name": "Introduction to Computer Programming",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": false
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "CS 235",
              "name": "Data Structures and Algorithms",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "CS 142"
                 ]
          },
          {
              "code": "CS 236",
              "name": "Discrete Structures",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "CS 235"
                 ]
          },
          {
              "code": "CS 224",
              "name": "Introduction to Computer Systems",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "CS 142"
                 ]
          },
          {
              "code": "CS 240",
              "name": "Advanced Programming Concepts",
              "credits": 4,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "CS 236"
                 ]
          },
          {
              "code": "CS 252",
              "name": "Introduction to Computational Theory",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 236"
                 ]
          },
          {
              "code": "CS 312",
              "name": "Algorithm Design and Analysis",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240",
                  "CS 252"
                 ]
          },
          {
              "code": "CS 324",
              "name": "Systems Programming",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 224",
                  "CS 240"
                 ]
          },
          {
              "code": "CS 340",
              "name": "Software Design and Testing",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "CS 240"
                 ]
          },
          {
              "code": "CS 404",
              "name": "Ethics and Computers in Society",
              "credits": 2,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240",
                  "CS 316"
                 ]
          },
          {
              "code": "MATH 313",
              "name": "Elementary Linear Algebra",
              "credits": 3,
              "type": "major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "MATH 112"
                 ]
          },
          {
              "code": "MATH 112",
              "name": "Calculus 1",
              "credits": 4,
              "type": "GE-major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "MATH 113",
              "name": "Calculus 2",
              "credits": 4,
              "type": "GE-major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "MATH 112"
                 ]
          },
          {
              "code": "PHSCS 121",
              "name": "Introduction to Newtonian Mechanics",
              "credits": 3,
              "type": "GE-major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": false
                 },
              "prereqs":
                 [
                  "MATH 112"
                 ]
          },
          {
              "code": "ENGL 316",
              "name": "Technical Communication",
              "credits": 3,
              "type": "GE-major-required",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "STAT 121",
              "name": "Principles of Statistics",
              "credits": 3,
              "type": "GE-major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "MATH 110"
                 ]
          },
          {
              "code": "CS 330",
              "name": "Concepts of Programming Languages",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240"
                 ]
          },
          {
              "code": "CS 345",
              "name": "Operating System Design",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [
                  "CS 224",
                  "CS 240"
                 ]
          },
          {
              "code": "CS 355",
              "name": "Interactive Graphics and Image Processing",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240",
                  "MATH 313"
                 ]
          },
          {
              "code": "CS 418",
              "name": "Bioinformatics",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240"
                 ]
          },
          {
              "code": "CS 428",
              "name": "Software Engineering",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 340"
                 ]
          },
          {
              "code": "CS 450",
              "name": "Computer Vision",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": false,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 312",
                  "CS 355",
                  "MATH 313"
                 ]
          },
          {
              "code": "CS 455",
              "name": "Computer Graphics",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 355",
                  "MATH 313"
                 ]
          },
          {
              "code": "CS 456",
              "name": "Introduction to User Interface Software",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": false,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240",
                  "CS 356"
                 ]
          },
          {
              "code": "CS 462",
              "name": "Large-scale Distributed System Design",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": false,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 324",
                  "CS 340"
                 ]
          },
          {
              "code": "CS 465",
              "name": "Computer Security",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 324"
                 ]
          },
          {
              "code": "CS 470",
              "name": "Introduction to Artificial Intelligence",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 312",
                  "MATH 313",
                  "STAT 121"
                 ]
          },
          {
              "code": "CS 472",
              "name": "Introduction to Machine Learning",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "MATH 313",
                  "STAT 121"
                 ]
          },
          {
              "code": "CS 474",
              "name": "Deep Learning",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "MATH 313"
                 ]
          },
          {
              "code": "CS 486",
              "name": "Verification and Validation",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 312"
                 ]
          },
          {
              "code": "CS 260",
              "name": "Web Programming",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 142"
                 ]
          },
          {
              "code": "CS 356",
              "name": "Designing the User Experience",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240"
                 ]
          },
          {
              "code": "CS 405",
              "name": "Creating and Managing a Software Business",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240",
                  "ENGL 316"
                 ]
          },
          {
              "code": "CS 494",
              "name": "Capstone 1",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": true,
                  "winter": false,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240"
                 ]
          },
          {
              "code": "CS 495",
              "name": "Capstone 2",
              "credits": 3,
              "type": "major-elective",
              "offered":
                 {
                  "fall": false,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [
                  "CS 240"
                 ]
          },
          {
              "code": "REL A 275",
              "name": "Teachings and Doctrine of the Book of Mormon",
              "credits": 2,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "REL A 250",
              "name": "Jesus Christ and the Everlasting Gospel",
              "credits": 2,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "REL A 250",
              "name": "Jesus Christ and the Everlasting Gospel",
              "credits": 2,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "REL C 225",
              "name": "Foundations of the Restoration",
              "credits": 2,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "REL C 200",
              "name": "The Eternal Family",
              "credits": 2,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "A HTG 100",
              "name": "American Heritage",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "ANTHR 101",
              "name": "Social/Cultural Anthropology",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "WRTG 150",
              "name": "Writing and Rhetoric",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "ARTHC 201",
              "name": "World Civilization to 1500",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "ARTHC 202",
              "name": "World Civilization Since 1500",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "ART 101",
              "name": "Introduction to Art and Drawing",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "ENGL 202",
              "name": "Masterpieces of World Literature 2",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": false,
                  "summer": false
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "BIO 100",
              "name": "Principles of Biology",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          },
          {
              "code": "PHY S 100",
              "name": "Physical Science",
              "credits": 3,
              "type": "GE",
              "offered":
                 {
                  "fall": true,
                  "winter": true,
                  "spring": true,
                  "summer": true
                 },
              "prereqs":
                 [

                 ]
          }

      ]
   },
   econProgram: {
      "courses" : [
        {
           "code" : "MATH 110",
           "name" : "College Algebra",
           "credits" : 3,
           "type" : "GE",
           "offered" :
              {
                 "fall" : true,
                 "winter" : true,
                 "spring" : true,
                 "summer" : true
              },
              "prereqs" : ["MATH 97"]
        },
        {
            "code": "IHUM 101",
            "name": "An Introduction to the Humanities",
            "credits": 3,
            "type": "GE",
            "offered":
               {
                "fall": true,
                "winter": true,
                "spring": true,
                "summer": true
               },
            "prereqs":
               [

               ]
        },
         {
            "code" : "REL A 121",
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
         },
         {
            "code" : "AHTG 100",
            "name" : "American Heritage",
            "credits" : 3,
            "type" : "GE",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : false,
                  "summer" : false
               },
               "prereqs" : []
         },
         {
            "code" : "WRTG 100",
            "name" : "Writing and Rhetoric",
            "credits" : 3,
            "type" : "GE",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : true
               },
               "prereqs" : []
         },
         {
            "code" : "ECON 380",
            "name" : "Intermediate Price Theory 1",
            "credits" : 3,
            "type" : "major-required",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : false
               },
               "prereqs" : ["ECON 110", "MATH 112"]
         },
         {
            "code" : "ECON 378",
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
               "prereqs" : ["ECON 110"]
         },
         {
            "code" : "ECON 381",
            "name" : "Intermediate Macroeconomics",
            "credits" : 3,
            "type" : "major-required",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : false
               },
               "prereqs" : ["ECON 110", "MATH 112", "MATH 113"]
         },
         {
            "code" : "ECON 382",
            "name" : "Intermediate Price Theory 2",
            "credits" : 3,
            "type" : "major-required",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : false
               },
               "prereqs" : ["ECON 110"]
         },
         {
            "code" : "ECON 388",
            "name" : "Introduction to Econometrics",
            "credits" : 3,
            "type" : "major-required",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : false
               },
               "prereqs" : ["ECON 378", "ECON 380"]
         },
         {
            "code" : "ECON 420",
            "name" : "Economicas of Antitrust Law and Regulation",
            "credits" : 3,
            "type" : "major-elective",
            "offered" :
               {
                  "fall" : true,
                  "winter" : false,
                  "spring" : false,
                  "summer" : false
               },
               "prereqs" : ["ECON 110"]
         },
         {
            "code" : "ECON 421",
            "name" : "Law and Economics",
            "credits" : 3,
            "type" : "major-elective",
            "offered" :
               {
                  "fall" : false,
                  "winter" : true,
                  "spring" : false,
                  "summer" : false
               },
               "prereqs" : ["ECON 378", "ECON 380"]
         },
         {
            "code" : "ECON 431",
            "name" : "Economic Development",
            "credits" : 3,
            "type" : "major-elective",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : false,
                  "summer" : false
               },
               "prereqs" : ["ECON 380", "ECON 110388", "POLI 328"]
         },
         {
            "code" : "MATH 112",
            "name" : "Calculus 1",
            "credits" : 4,
            "type" : "GE-major-required",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : true
               },
               "prereqs" : []
         },
         {
            "code" : "ECON 110",
            "name" : "Economic Principles and Problems",
            "credits" : 3,
            "type" : "GE-major-required",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : true,
                  "summer" : true
               },
               "prereqs" : []
         },
         {
            "code" : "ECON 230",
            "name" : "Economic Development and Growth",
            "credits" : 3,
            "type" : "major-elective",
            "offered" :
               {
                  "fall" : true,
                  "winter" : true,
                  "spring" : false,
                  "summer" : false
               },
               "prereqs" : ["ECON 110"]
         }
      ]
   },
   csSchedule: {},
   econSchedule: {
     "Semesters" :
       [
         {
           "year" : 2021,
           "type" : "Fall",
           "courses" :
           [
             {
                "code" : "AHTG 100",
                "name" : "American Heritage",
                "credits" : 3,
                "type" : "GE",
                "offered" :
                   {
                      "fall" : true,
                      "winter" : true,
                      "spring" : false,
                      "summer" : false
                   },
                   "prereqs" : []
             },
             {
                "code" : "MATH 110",
                "name" : "College Algebra",
                "credits" : 3,
                "type" : "GE",
                "offered" :
                   {
                      "fall" : true,
                      "winter" : true,
                      "spring" : true,
                      "summer" : true
                   },
                   "prereqs" : ["MATH 97"]
             },
             {
                "code" : "REL A 121",
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
             },
             {
                 "code": "ARTHC 201",
                 "name": "World Civilization to 1500",
                 "credits": 3,
                 "type": "GE",
                 "offered":
                    {
                     "fall": true,
                     "winter": true,
                     "spring": true,
                     "summer": true
                    },
                 "prereqs":
                    [

                    ]
             },
             {
                 "code": "IHUM 101",
                 "name": "An Introduction to the Humanities",
                 "credits": 3,
                 "type": "GE",
                 "offered":
                    {
                     "fall": true,
                     "winter": true,
                     "spring": true,
                     "summer": true
                    },
                 "prereqs":
                    [

                    ]
             }
           ]
         },
         {
           "year" : 2022,
           "type" : "Winter",
           "courses" :
           [
             {
                "code" : "ECON 110",
                "name" : "Economic Principles and Problems",
                "credits" : 3,
                "type" : "GE-major-required",
                "offered" :
                   {
                      "fall" : true,
                      "winter" : true,
                      "spring" : true,
                      "summer" : true
                   },
                   "prereqs" : []
             },
             {
                 "code": "MATH 112",
                 "name": "Calculus 1",
                 "credits": 4,
                 "type": "GE-major-required",
                 "offered":
                    {
                     "fall": true,
                     "winter": true,
                     "spring": true,
                     "summer": true
                    },
                 "prereqs":
                    [

                    ]
             },
             {
                 "code": "REL A 250",
                 "name": "Jesus Christ and the Everlasting Gospel",
                 "credits": 2,
                 "type": "GE",
                 "offered":
                    {
                     "fall": true,
                     "winter": true,
                     "spring": true,
                     "summer": true
                    },
                 "prereqs":
                    [

                    ]
             },
             {
                 "code": "WRTG 150",
                 "name": "Writing and Rhetoric",
                 "credits": 2,
                 "type": "GE",
                 "offered":
                    {
                     "fall": true,
                     "winter": true,
                     "spring": true,
                     "summer": true
                    },
                 "prereqs":
                    [

                    ]
             },
             {
               "year" : 2022,
               "type" : "Fall",
               "courses" :
               [
                 {
                    "code" : "ECON 378",
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
                       "prereqs" : ["ECON 110"]
                 },
                 {
                    "code" : "ECON 380",
                    "name" : "Intermediate Price Theory 1",
                    "credits" : 3,
                    "type" : "major-required",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 110", "MATH 112"]
                 },
                 {
                    "code" : "ECON 381",
                    "name" : "Intermediate Macroeconomics",
                    "credits" : 3,
                    "type" : "major-required",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 110", "MATH 112", "MATH 113"]
                 },
                 {
                    "code" : "ENGL 312",
                    "name" : "Persuasive Writing",
                    "credits" : 3,
                    "type" : "GE",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" :
                       [

                       ]
                 },
                 {
                    "code" : "IHUM 201",
                    "name" : "Western Humanities 1: Antiquity to Renaissance",
                    "credits" : 3,
                    "type" : "GE",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" :
                       [

                       ]
                 }
               ]
             },
             {
               "year" : 2023,
               "type" : "Winter",
               "courses" :
               [
                 {
                    "code" : "ECON 382",
                    "name" : "Intermediate Price Theory 2",
                    "credits" : 3,
                    "type" : "major-required",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 110"]
                 },
                 {
                    "code" : "ECON 388",
                    "name" : "Introduction to Econometrics",
                    "credits" : 3,
                    "type" : "major-required",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 378", "ECON 380"]
                 },
                 {
                    "code" : "ECON 420",
                    "name" : "Economicas of Antitrust Law and Regulation",
                    "credits" : 3,
                    "type" : "major-elective",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : false,
                          "spring" : false,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 110"]
                 },
                 {
                    "code" : "MUSIC 101",
                    "name" : "Introduction to Music",
                    "credits" : 3,
                    "type" : "GE",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" :
                       [

                       ]
                 },
                 {
                    "code" : "IHUM 202",
                    "name" : "Western Humanities 2: Renaissance to the Present",
                    "credits" : 3,
                    "type" : "GE",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" :
                       [

                       ]
                 }
               ]
             },
             {
               "year" : 2023,
               "type" : "Fall",
               "courses" :
               [
                 {
                    "code" : "ECON 421",
                    "name" : "Law and Economics",
                    "credits" : 3,
                    "type" : "major-elective",
                    "offered" :
                       {
                          "fall" : false,
                          "winter" : true,
                          "spring" : false,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 378", "ECON 380"]
                 },
                 {
                    "code" : "ECON 431",
                    "name" : "Economic Development",
                    "credits" : 3,
                    "type" : "major-elective",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : false,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 380", "ECON 110388", "POLI 328"]
                 },
                 {
                    "code" : "ECON 420",
                    "name" : "Economicas of Antitrust Law and Regulation",
                    "credits" : 3,
                    "type" : "major-elective",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : false,
                          "spring" : false,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 110"]
                 },
                 {
                    "code" : "PHSCS 101",
                    "name" : "Basic Physics",
                    "credits" : 3,
                    "type" : "GE",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" :
                       [

                       ]
                 },
                 {
                    "code" : "BIO 100",
                    "name" : "Principles of Biology",
                    "credits" : 3,
                    "type" : "GE",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : true,
                          "summer" : false
                       },
                       "prereqs" :
                       [

                       ]
                 },
                 {
                     "code": "ANTHR 101",
                     "name": "Social/Cultural Anthropology",
                     "credits": 3,
                     "type": "GE",
                     "offered":
                        {
                         "fall": true,
                         "winter": true,
                         "spring": true,
                         "summer": true
                        },
                     "prereqs":
                        [

                        ]
                 }
               ]
             },
             {
               "year" : 2024,
               "type" : "Winter",
               "courses" :
               [
                 {
                    "code" : "ECON 450",
                    "name" : "Financial Economics",
                    "credits" : 3,
                    "type" : "major-elective",
                    "offered" :
                       {
                          "fall" : false,
                          "winter" : true,
                          "spring" : false,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 382", "ECON 388"]
                 },
                 {
                    "code" : "ECON 478",
                    "name" : "Game Theory and Economics",
                    "credits" : 3,
                    "type" : "major-elective",
                    "offered" :
                       {
                          "fall" : true,
                          "winter" : true,
                          "spring" : false,
                          "summer" : false
                       },
                       "prereqs" : ["ECON 378", "ECON 380"]
                 }
               ]
             }
           ]
         }
       ]
   }
};
