from objects import mentorData
from objects import businessData

matchResults = {}

for x in mentorData:
    for y in range(len(mentorData[x]['skills'])):
        for i in range(len(businessData['skills'])):
            if businessData['skills'][i] == mentorData[x]['skills'][y]:
                if x in matchResults:
                    matchResults[x] = matchResults[x]+1
                else:
                    matchResults[x] = 1

print matchResults

        # print mentorData[x]['skills'][y]
