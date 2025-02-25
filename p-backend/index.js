const express = require('express');

const app = express();

app.get('/1', (req, res) => 
{
    res.send('<br><h1 style = "text-align:center">This is the Backend Server running</h1>');
})
app.get('/', (req, res) => 
{
  res.sendFile("C:\\Users\\sanja\\Desktop\\mern\\Day-3\\bcss.html");
})

const port = 3000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
