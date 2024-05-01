# UniBasement

## [Architecture](model/ARCHITECTURE.md) | [Handshake](docs/HANDSHAKE.md) | [Database](docs/DATABASE.md) | [AI](AI.md) | [Report](report/REPORT.md)

## Description

UniBasement is designed to empower students to understand the concepts in a deeper manner, at the forefront of the platform is the desire to enable students to have a deeper understanding of the content they are taught and to work with their peers to develop their collective understanding. Within the modern world, studying is more than ever stressful and makes student anxious, easy access to materials to enable students to study in a more effective manner is essential and UniBasement intends to make studying for final exams an easier affair.  

## What Does UniBasement Do?

UniBasement transforms the way students prepare for exams. It allows students to post answers to past exam questions, fostering a community-driven learning environment. Other users can upvote or downvote these answers, ensuring the most accurate and helpful responses rise to the top. This interactive approach makes studying more efficient and promotes a deeper understanding of the subject matter. With UniBasement, exam preparation becomes a less daunting and more collaborative process.

## Authors

This project is brought to you by the Evan Hughes FanClub. Our team consists of:

### Frontend

- [Olivia Ronda](https://github.com/vilnor)
- [Pramith Kodalli](https://github.com/PramithKodali)
- [Tristan Duncombe](https://github.com/tristanduncombe)

### Backend

- [Shanon Lakshan Chandrasekara](https://github.com/86LAK)
- [Jackson Trenarry](https://github.com/JTrenarry)
- [Ibrahim Cassim](https://github.com/IbrahimCassim)

### DevOps

- [Shanon Lakshan Chandrasekara](https://github.com/86LAK)

## Deployment

Deployment of UniBasement is managed via the GitHub Actions. This is the recommended and easiest way to deploy the application and automatically preserve the state files. The GitHub actions utilise and manage its state files in AWS via an S3 bucket.
> :warning: **DO NOT RUN THE DEPLOY.SH LOCALLY TO DEPLOY INFRASTRUCTURE. THIS INCLUDES RUNNING ```TERRAFORM APPLY```**: Lakshan will find you and tickle you if you do

1. Grab your AWS credentials from the UQ Token Machine (link on Blackboard)
2. Go to the Github Actions and find the ```Manual AWS Deployment``` workflow.
3. When prompted paste in the credentials and run the workflow off the main branch

## Teardown

Similar to Deployment. 
> :warning: **DO NOT RUN THE TEARDOWN.SH LOCALLY TO TEARDOWN INFRASTRUCTURE. THIS INCLUDES RUNNING  ```TERRAFORM DESTROY```**: Lakshan will find you and tickle you if you do

1. Grab your AWS credentials from the UQ Token Machine (link on Blackboard)
2. Go to the Github Actions and find the ```Manual AWS Teardown``` workflow.
3. When prompted paste in the credentials and run the workflow off the main branch

## Tests

1. To execute the backend tests, navigate to the `backend` directory and execute ```npm test```.
