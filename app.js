const express = require('express')
const app = express()
const port = 3000
const {exec} = require('child_process');
const shell = require('shelljs');

app.get('/', (req, res) => {
  res.send('available 1.0')
});

app.post('/deploy', (req, res) => {
  res.send('Started !')
  shell.exec('./deploy.sh', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
}); 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
