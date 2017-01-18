//Adds a mentor to DDB.
'use strict';

// standard aws stuff
    var AWS = require('aws-sdk');
    var _ = require('lodash');
    const docClient = new AWS.DynamoDB.DocumentClient();
    const stage = process.env.stageVar;
    //Insert stage below
    const table_name = "acg-" + stage + "-organization-table";

    module.exports.newOrganization = (event, context, callback) => {
      var response;
      console.log(event.body);
      var body = JSON.parse(event.body);
      var organization = {};
      organization.location = {};
      organization.name = body.name;
      organization.contact = {};
      organization.about_us = body.about_us;
      organization.projects = {};
      organization.contact.social_media = {};
      //location assertions
      if ("street" in body.location){
        organization.location.street = body.location.street;
      }
      if ("city" in body.location){
        organization.location.city = body.location.city;
      }
      if ("state" in body.location){
        organization.location.state = body.location.state;
      }
      if ("zip" in body.location){
        organization.location.zip = body.location.zip;
      }

      //contact us assertions
      if ("phone" in body.contact){
        organization.contact.phone = body.contact.phone;
      }
      if ("email" in body.contact){
        organization.contact.email = body.contact.email;
      }
      if ("website" in body.contact){
        organization.contact.website = body.contact.website;
      }
      if ("social_media" in body.contact){
        organization.contact.social_media = body.contact.social_media;
      }
      //Asserting certifications
      //could be done with a for loop
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
      var organizationParams = {
        TableName: table_name,
        Item: organization
    }
    console.log(organizationParams);
docClient.put(organizationParams, dynamoCallback)


}

module.exports.getOrganization = (event, context, callback) => {
  const params = {
    TableName: table_name,
    KeyConditionExpression: "#name = :name",
    ExpressionAttributeNames:{
                "#name": "name"
            },
    ExpressionAttributeValues: {
      ":name": event.pathParameters.organization_name
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
