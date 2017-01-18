//Adds a mentor to DDB.
'use strict';

// standard aws stuff
    var AWS = require('aws-sdk');
    var _ = require('lodash');
    const docClient = new AWS.DynamoDB.DocumentClient();
    const stage = process.env.stageVar;
    //Insert stage below
    const table_name = "acg-" + stage + "-volunteer-table";

    module.exports.newVolunteer = (event, context, callback) => {
      var response;
      console.log(event.body);
      var body = JSON.parse(event.body);
      var volunteer = {};
      volunteer.skills = {};
      console.log(volunteer);
      console.log(body.skills);
      volunteer.email = body.email;
      volunteer.skills.database = body.skills.database;
      volunteer.skills.operations = body.skills.operations;
      volunteer.skills.security = body.skills.security;
      volunteer.skills.mobile = body.skills.mobile;
      volunteer.skills.serverless = body.skills.serverless;
      volunteer.skills.development = body.skills.development;
      volunteer.name = body.name;
      volunteer.certs = [];
      volunteer.causes = [];
      //Asserting certifications
      //could be done with a for loop!
      if (_.includes(body.certs, "associate_solutions_architect")){
        volunteer.certs.push("associate_solutions_architect")
      }
      if (_.includes(body.certs, "associate_sysops_administrator")){
        volunteer.certs.push("associate_sysops_administrator")
      }
      if (_.includes(body.certs, "associate_developer")){
        volunteer.certs.push("associate_developer")
      }
      if (_.includes(body.certs, "specialty_security")){
        volunteer.certs.push("specialty_security")
      }
      if (_.includes(body.certs, "speciality_big_data")){
        volunteer.certs.push("speciality_big_data")
      }
      if (_.includes(body.certs, "specialty_advanced_networking")){
        volunteer.certs.push("specialty_advanced_networking")
      }
      if (_.includes(body.certs, "professional_devops_engineer")){
        volunteer.certs.push("professional_devops_engineer")
      }
      if (_.includes(body.certs, "professional_solutions_architect")){
        volunteer.certs.push("professional_solutions_architect")
      }
      //Assserting causes
      if (_.includes(body.causes, "animal welfare")){
        volunteer.causes.push("animal welfare")
      }
      if (_.includes(body.causes, "arts and culture")){
        volunteer.causes.push("arts and culture")
      }
      if (_.includes(body.causes, "children")){
        volunteer.causes.push("children")
      }
      if (_.includes(body.causes, "civil rights")){
        volunteer.causes.push("civil rights")
      }
      if (_.includes(body.causes, "economic empowerment")){
        volunteer.causes.push("economic empowerment")
      }
      if (_.includes(body.causes, "education")){
        volunteer.causes.push("education")
      }
      if (_.includes(body.causes, "environment")){
        volunteer.causes.push("environment")
      }
      if (_.includes(body.causes, "health")){
        volunteer.causes.push("health")
      }
      if (_.includes(body.causes, "politics")){
        volunteer.causes.push("politics")
      }
      if (_.includes(body.causes, "poverty alleviation")){
        volunteer.causes.push("poverty alleviation")
      }
      if (_.includes(body.causes, "religion")){
        volunteer.causes.push("religion")
      }
      if (_.includes(body.causes, "science and technology")){
        volunteer.causes.push("science and technology")
      }
      if (_.includes(body.causes, "social services")){
        volunteer.causes.push("social services")
      }
      if (_.includes(body.causes, "women")){
        volunteer.causes.push("women")
      }
      if (_.includes(body.causes, "mentorship")){
        volunteer.causes.push("mentorship")
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
      var volunteerParams = {
        TableName: table_name,
        Item: volunteer
    }
    console.log(volunteerParams);
docClient.put(volunteerParams, dynamoCallback)


}

module.exports.getVolunteer = (event, context, callback) => {
  const params = {
    TableName: table_name,
    KeyConditionExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": event.pathParameters.volunteer_email
    }
  };

  docClient.query(params, function(err, data) {
    var response = {};
    if (err) {
      response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(err, null, 2)
      };
    } else {
      response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data, null, 2)
      };
    };
    callback(null, response);
  });
}
