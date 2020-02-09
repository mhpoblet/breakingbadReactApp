var http = require("https");
const express = require('express')
const app = express()
const port = 3000



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();
 
  // Performs label detection on the image file
  const [result] = await client.labelDetection('./resources/cookie.jpg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  

  //labels.forEach(label => console.log(label.description));
  
  var now = labels.find(label => label.description == "Cookie");

  
  console.log(now.description);
  app.get('/', (req, res) => res.send(now));
}


// [END vision_quickstart]

quickstart().catch(console.error);
