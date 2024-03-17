# Serverless React Application with AWS Lambda

This project focuses on building a serverless web application using React for the frontend and AWS Lambda for the backend.

## Introduction

The aim of this project is to demonstrate the implementation of a serverless architecture for web applications. It utilizes React to create a dynamic and interactive user interface, while AWS Lambda functions handle backend logic and processing tasks. The serverless approach offers scalability, cost-effectiveness, and simplified infrastructure management.

## Features

- **React Frontend**: The frontend of the application is built using React, providing a responsive and user-friendly interface.
- **AWS Lambda Backend**: Backend logic and processing tasks are handled by AWS Lambda functions, eliminating the need for server management and infrastructure provisioning.
- **API Gateway Integration**: API Gateway is used to expose Lambda functions as RESTful APIs, enabling communication between the frontend and backend.
- **Authentication**: Authentication and authorization mechanisms can be implemented using AWS Cognito or other authentication providers to secure the application.
- **Data Storage**: Data storage options such as Amazon DynamoDB, S3, or Aurora Serverless can be integrated to persist application data.
- **CI/CD Pipeline**: Continuous integration and deployment pipelines can be set up using AWS CodePipeline and AWS CodeBuild for automated deployment of updates.

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda.git
   cd repository
   ```
2. **Install all dependancies**
    ```bash
    npm install
    ```
3. **Configure AWS Credentials:**  Set up AWS credentials and configure the AWS CLI on your local machine to interact with AWS services.

4. **Deploy Lambda Functions:**  Deploy Lambda functions using the AWS Serverless Application Model (SAM) or AWS Management Console.

5. **Deploy Frontend:**  Build the React application and deploy it to a static hosting service such as AWS S3 or AWS Amplify.

6. **Configure API Gateway:**  Create a RESTful API using API Gateway and integrate it with the deployed Lambda functions.

# Main Technologies Used
- React: JavaScript library for building user interfaces.
- AWS Lambda: Serverless compute service for running code without provisioning or managing servers.
- AWS API Gateway: Fully managed service for creating, deploying, and managing APIs.

# React Documentation
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
