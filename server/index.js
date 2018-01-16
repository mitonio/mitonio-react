const app = require('./src/app');

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});