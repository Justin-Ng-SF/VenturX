//using express for API
const express = require('express');

const app = express();


app.use('/greetings/', require('./routes/api/greetings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
