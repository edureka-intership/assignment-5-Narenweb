const exp = require('express');
const bodyParser = require('body-parser');
const routerSlash = require('./routers/slash');

const app = exp();

const PORT = 3000;

app.use(bodyParser.json());
app.use("/", routerSlash);


app.listen(PORT, () => {
    console.log(`you have started listening to a server on port: ${PORT}`);
})