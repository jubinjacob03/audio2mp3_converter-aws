# Serverless React Application with AWS Lambda

This project focuses on building a serverless web application using React (frontend) and AWS Lambda (backend).

## Introduction

The aim of this project is to demonstrate the implementation of a serverless architecture for web applications. It utilizes React to create a dynamic and interactive user interface, while AWS Lambda functions handle backend logic and processing tasks.

## Features

- **React Frontend**: The frontend of the application is built using React, providing a responsive and user-friendly interface.
- **AWS Lambda Backend**: Backend logic and processing tasks are handled by AWS Lambda functions, eliminating the need for server management and infrastructure provisioning.
- **API Gateway Integration**: API Gateway is used to expose Lambda functions as RESTful APIs, enabling communication between the frontend and backend.
- **Tiny URL PHP**: The implementation of a tiny URL system guarantees the safeguarding of the shortened URL's security and integrity, mitigating risks associated with the potential generation of malicious links through random methods.

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda.git
   cd shortify_url-shortner-aws_lambda
   cd converter
   ```
2. **Install all dependancies ( perform after changing the working dir to <i>converter</i> folder)**
    ```bash
    npm install
    ```
3. **Configure AWS Credentials:**  Set up AWS credentials and configure the AWS CLI on your local machine to interact with AWS services or you can use AWS web console.

4. **Deploy Lambda Functions:**  Deploy Lambda functions using the AWS Serverless Application Model (SAM) or AWS Management Console. When selecting the lambda function choose runtime as <code>Node.js 20.x</code> and  architecture as <code>x86_64</code>

5. **Deploy Frontend:**  Build the React application and deploy it to a static hosting service such as AWS S3 or AWS Amplify.

6. **Configure API Gateway:**  Create a RESTful API using API Gateway and integrate it with the deployed Lambda functions.

# Main Technologies Used
- React: JavaScript library for building user interfaces.
- AWS Lambda: Serverless compute service for running code without provisioning or managing servers.
- AWS API Gateway: Fully managed service for creating, deploying, and managing APIs.

# React Documentation
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
