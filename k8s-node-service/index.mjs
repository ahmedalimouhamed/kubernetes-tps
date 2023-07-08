import express from 'express'
import os from 'os'

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  const message = `Hello world, I am Pod ${os.hostname()} : version 1.2.0`;
  res.send(message)
})

app.listen(PORT, () => {
  console.log('App listening on port 3000!');
  console.log(os.hostname());
});