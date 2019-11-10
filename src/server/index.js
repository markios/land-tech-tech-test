const express = require('express');
const { SERVER } = require('./config/config');
const propertyRouter = require('./routes/property/property');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.use('/api', propertyRouter);

/* Middlewares */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

/* start */
app.listen(SERVER.PORT, () => {
  console.log(`Application listening on ${SERVER.PORT}`);
});
