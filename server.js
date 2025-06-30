 console.log("Hello World");

 const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json()); 
app.get('/api/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.json(JSON.parse(data));
  });
});
app.post('/api/data', (req, res) => {
  const newData = req.body;
  fs.writeFile('data.json', JSON.stringify(newData, null, 2), err => {
    if (err) return res.status(500).send('Error writing file');
    res.send('Data saved successfully!');
  });
});
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
