const { Consumer } = require("sqs-consumer");
const { SQSClient } = require("@aws-sdk/client-sqs");

const app = Consumer.create({
  queueUrl: process.env.SQS_QUEUE_URL,
  handleMessage: async (message) => {
    console.log("Receiving Message")
    console.log(message)
    console.log("Message Received")
  },
  sqs: new SQSClient({
    region: process.env.AWS_REGION,
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