const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Tom',
      age: 24
    },
    {
      name: 'Max',
      age: 24
    }
  ])
})

if (!module.parent) {
  app.listen(3030);

}
module.exports.app = app;
