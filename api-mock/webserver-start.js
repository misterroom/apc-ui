const express = require('express')
const cors = require('cors')

const app = express()
// cors not enabled in real application
// how to solve with k8s?
app.use(cors())

app.get('/api/hello', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log(`local APC webserver listening on http://localhost:3000`);
})
