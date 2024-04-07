const { Consumer } = require("sqs-consumer");
const { SQSClient } = require("@aws-sdk/client-sqs");

const app = Consumer.create({
  queueUrl: "https://sqs.AWS-REGION.amazonaws.com/ACCOUNT-NUMBER/SQS-NAME",
  handleMessage: async (message) => {
    console.log("Receiving Message")
    console.log(message)
    console.log("Message Received")
  },
  sqs: new SQSClient({
    region: "us-east-1"
  }),
});

app.on("error", (err) => {
  console.error(err.message);
});

app.on("processing_error", (err) => {
  console.error(err.message);
});

app.on("timeout_error", (err) => {
  console.error(err.message);
});
console.log("Started SQS Consumer")
app.start();