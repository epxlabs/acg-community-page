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
#### Example Mentor Profile
```
{
"name": ["EPX engineer #4"],
"interests": ["Women in engineering", "teaching", "aws"],
"certs": ["DDB", "S3", "Lambda", "Cognito", "security"],
"skills": ["Security", "Data management"],
"location": ["Las Vegas"],
}
```
#### Matching Algorithm
Candidates and businesses will be matched on a simple python matching script which will perform a simple comparison of skills and certs along with a location check to see if the two are compatible.

### To use the sort script:
Clone the repo and navigate to the python-sort-demo folder.
In the terminal, type ```python sort.py```.
The script will return a user key and a relevance value.
