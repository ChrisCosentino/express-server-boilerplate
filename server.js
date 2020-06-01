const express = require('express');

const app = express();

//this allows us to get the json body in a post request(removing it gives undefined)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('api running'));

// http://url:5000/api/...
app.use('/api/profile', require('./routes/api/profile'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));