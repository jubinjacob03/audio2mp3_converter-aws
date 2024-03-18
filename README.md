# Serverless React Application with AWS Lambda

This project focuses on building a serverless web application using React (frontend) and AWS Lambda (backend).

## Introduction

The aim of this project is to demonstrate the implementation of a serverless architecture for web applications. It utilizes React to create a dynamic and interactive user interface, while AWS Lambda functions handle backend logic and processing tasks.

## Features

- **React Frontend**: The frontend of the application is built using React, making it easy for futher development of user-interface if required.
- **AWS Lambda Backend**: Backend logic and processing tasks are handled by AWS Lambda functions, eliminating the need for server management and infrastructure provisioning.
- **API Gateway Integration**: API Gateway is used to expose Lambda functions as RESTful APIs, enabling communication between the frontend and backend.
- **Tiny URL PHP**: The implementation of a tiny URL system guarantees the safeguarding of the shortened URL's security and integrity, mitigating risks associated with the potential generation of malicious links through random methods.

> [!CAUTION]
> Before proceeding, it is important to understand that AWS operates under a <strong><em>pricing model where users are billed for consumed resources and services</em></strong>, as outlined in their terms and conditions. Thus, it is strongly advised to review [AWS documentation](https://aws.amazon.com/pricing/) regarding service pricing to prevent inadvertent incurring of charges.

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

4. **Deploy Lambda Functions:**  Deploy Lambda functions using the AWS Serverless Application Model (SAM) or AWS Management Console. When selecting the lambda function choose runtime as <code>Node.js 20.x</code> and  architecture as <code>x86_64</code>. Keep the remaining configurations as default. Once lambda function is created follow these [steps](https://github.com/jubinjacob03/shortify_url-shortner-aws_lambda/blob/main/converter/README.md).

5. **Deploy Frontend:**  Rebuild the React application **( automatically done when <code>npm install</code> is executed )** and deploy it to localhost with the help of <strong>NPM</strong>.

6. **Configure API Gateway:**  Create a <strong><em>HTTP / REST</em></strong> API using AWS API Gateway for function trigger, integrate it with the deployed Lambda function and add the API Endpoint to the React App.

# Main Technologies Used
- React: JavaScript library for building user interfaces.
- AWS Lambda: Serverless compute service for running code without provisioning or managing servers.
- AWS API Gateway: Fully managed service for creating, deploying, and managing APIs.
- Tiny URL: For shortening the url securely while maintaining integrity

# Documentations
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [React Documentation](https://react.dev/learn)
- [For more advanced use of TinyURL - Docs](https://tinyurl.com/app/dev)
