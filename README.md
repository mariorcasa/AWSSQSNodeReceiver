# AWSSQSNodeReceiver
This repository contains a simple Node.js application that demonstrates consuming messages from an Amazon Simple Queue Service (SQS) queue using the sqs-consumer library and the AWS SDK for JavaScript.


## Prerequisites
Before running this application, ensure you have the following prerequisites installed:

- Node.js
- Docker (if you want to run the application in a Docker container)


## Running the Application

### Locally
- Clone this repository to your local machine.
- Install dependencies by running:
```bash
npm install
```
- Set up your AWS credentials by either configuring the AWS CLI or setting the AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN environment variables or use AWS Configure or use an AWS Role
- Run the application locally using:
```bash
node receiver.js
```

### Using Docker
- Clone this repository to your local machine.
- Build the Docker image using the provided Dockerfile running:
```bash
docker build -t aws-sqs-node-receiver .
```
- Run the Docker container running: 
```bash
docker run -e AWS_SECRET_ACCESS_KEY="1a2b3c4d5e6f7g8h9i" -e AWS_ACCESS_KEY_ID="1a2b3c4d5e6f7g8h9i" -e AWS_SESSION_TOKEN="1a2b3c4d5e6f7g8h9i" -e AWS_REGION=us-east-1 -e SQS_QUEUE_URL=https://sqs.us-east-1.amazonaws.com/123456789012/mybestsqs aws-sqs-node-receiver
```


## Usage
Once the application is running, it will continuously listen for messages from the specified SQS queue and log them to the console.


## Configuration
Ensure you have the necessary AWS credentials configured or provide them through environment variables, typically stored in a .env file. In your .env.dev file, set the values for AWS_REGION and SQS_QUEUE_URL variables. Additionally, you may include the following optional AWS credentials: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN

Remember to rename your .env.dev file to .env for the application to pick up the configuration.