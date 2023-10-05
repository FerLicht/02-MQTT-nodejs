const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://172.31.86.248");

client.on("connect", () => {
  client.subscribe("+", (err) => {
    if (!err) {
     console.log("Client connected");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
});
