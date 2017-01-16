//Adds a mentor to DDB.
'use strict';

// standard aws stuff
    var AWS = require('aws-sdk');
    var _ = require('lodash');
    const docClient = new AWS.DynamoDB.DocumentClient();
    const stage = process.env.stageVar;
    //Insert stage below
    const table_name = "acg-" + stage + "-mentor-table";

    module.exports.addMentor = (event, context, callback) => {
      var response;
      console.log(event.body);
      var body = JSON.parse(event.body);
      var mentor = {};
      mentor.skills = {};
      console.log(mentor);
      console.log(body.skills);
      mentor.email = body.email;
      mentor.skills.database = body.skills.database;
      mentor.skills.operations = body.skills.operations;
      mentor.skills.security = body.skills.security;
      mentor.skills.mobile = body.skills.mobile;
      mentor.skills.serverless = body.skills.serverless;
      mentor.skills.development = body.skills.development;
      mentor.name = body.name;
      mentor.certs = [];
      mentor.interests = [];
      //Asserting certifications
      //could be done with a for loop!
      if (_.includes(body.certs, "associate_solutions_architect")){
        mentor.certs.push("associate_solutions_architect")
      }
      if (_.includes(body.certs, "associate_sysops_administrator")){
        mentor.certs.push("associate_sysops_administrator")
      }
      if (_.includes(body.certs, "associate_developer")){
        mentor.certs.push("associate_developer")
      }
      if (_.includes(body.certs, "specialty_security")){
        mentor.certs.push("specialty_security")
      }
      if (_.includes(body.certs, "speciality_big_data")){
        mentor.certs.push("speciality_big_data")
      }
      if (_.includes(body.certs, "specialty_advanced_networking")){
        mentor.certs.push("specialty_advanced_networking")
      }
      if (_.includes(body.certs, "professional_devops_engineer")){
        mentor.certs.push("professional_devops_engineer")
      }
      if (_.includes(body.certs, "professional_solutions_architect")){
        mentor.certs.push("professional_solutions_architect")
      }
      //Assserting interests
      if (_.includes(body.interests, "animal welfare")){
        mentor.interests.push("animal welfare")
      }
      if (_.includes(body.interests, "arts and culture")){
        mentor.interests.push("arts and culture")
      }
      if (_.includes(body.interests, "children")){
        mentor.interests.push("children")
      }
      if (_.includes(body.interests, "civil rights")){
        mentor.interests.push("civil rights")
      }
      if (_.includes(body.interests, "economic empowerment")){
        mentor.interests.push("economic empowerment")
      }
      if (_.includes(body.interests, "education")){
        mentor.interests.push("education")
      }
      if (_.includes(body.interests, "environment")){
        mentor.interests.push("environment")
      }
      if (_.includes(body.interests, "health")){
        mentor.interests.push("health")
      }
      if (_.includes(body.interests, "politics")){
        mentor.interests.push("politics")
      }
      if (_.includes(body.interests, "poverty alleviation")){
        mentor.interests.push("poverty alleviation")
      }
      if (_.includes(body.interests, "religion")){
        mentor.interests.push("religion")
      }
      if (_.includes(body.interests, "science and technology")){
        mentor.interests.push("science and technology")
      }
      if (_.includes(body.interests, "social services")){
        mentor.interests.push("social services")
      }
      if (_.includes(body.interests, "women")){
        mentor.interests.push("women")
      }

      //console.log(event.body);
      //console.log(context);
      var dynamoCallback = function(err, data) {
        if (err) {
          response = {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(err, null, 2)
      };
        } else {
          response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: 'Data successfully stored.'
      };

          //console.log("Data: " + data);
        }
        //console.log("Response: " + JSON.stringify(response));
        callback(null, response);
      };
      console.log(event.body);
      var mentorParams = {
        TableName: table_name,
        Item: mentor
    }
    console.log(mentorParams);
docClient.put(mentorParams, dynamoCallback)


}
