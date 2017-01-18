## ACG Mentor Matching
The goal of the ACG mentor matcher is to connect non-profit/charities with tech mentors who are capable of providing technical advice.Mentors and Charities will be matched based on several criteria such as location, skills/requirements and certifications.Future goals are to implement a machine learning recommender to businesses so that we can suggest possible needs they have without them even realizing.

### Matching
Mentor candidates will fill out a profile with their relevant experience and certifications and attempt to match with non-profit seeking those needs.

#### Example business profile:
```
{
"name": ["Women in Tech"],
"project": ["Volunteer to Teach Women Cloud Engineers about X, Y, Z"],
"certs": ["DDB", "S3", "Lambda"],
"skills": ["Security", "Data management"],
"location": ["Las Vegas"],
"cause type": ["non-profit"]
}
```
#### Example Volunteer Profile
```
{
"name": ["EPX engineer #4"],

"causes": ["animal welfare",
"arts and culture",
"children",
"civil rights",
"economic empowerment",
"education",
"environment",
"health",
"politics",
"poverty alleviation",
"religion",
"science and technology",
"social services",
"women"],

"certs": ["associate_solutions_architect",
"associate_sysops_administrator",
"associate_developer",
"specialty_security",
"speciality_big_data",
"specialty_advanced_networking",
"professional_solutions_architect",
"professional_devops_engineer"],

"skills": ["database",
"security",
"operations",
"mobile",
"serverless",
"development"],
"location": ["Las Vegas"],
}
```
#### Matching Algorithm
Candidates and businesses will be matched on a simple python matching script which will perform a simple comparison of skills and certs along with a location check to see if the two are compatible.

### To use the sort script:
Clone the repo and navigate to the python-sort-demo folder.
In the terminal, type ```python sort.py```.
The script will return a user key and a relevance value.

###Add volunteer to DDB
In order to test the put user lambda, use:
```
curl -i -X PUT -H "Content-Type: application/json" -d "{\"email\":\"epx3@hotmail.com\", \"skills\":{\"database\":\"10\", \"security\":\"10\", \"operations\":\"10\", \"mobile\":\"10\", \"serverless\":\"10\", \"development\":\"10\"}, \"certs\": [\"associate_solutions_architect\", \"associate_sysops_administrator\", \"associate_developer\", \"specialty_security\", \"speciality_big_data\", \"specialty_advanced_networking\", \"professional_solutions_architect\", \"professional_devops_engineer\"], \"causes\":[\"animal welfare\", \"arts and culture\", \"children\", \"civil rights\", \"economic empowerment\", \"education\", \"environment\", \"health\", \"politics\", \"poverty alleviation\", \"religion\", \"science and technology\", \"social services\", \"women\", \"mentorship\"], \"name\": \"epxtest\"}" https://m4au4jlfse.execute-api.us-west-2.amazonaws.com/test/mentors/create
```
