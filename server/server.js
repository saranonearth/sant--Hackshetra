const app = require('express')();
const bodyParser = require('body-parser')
require('dotenv').config();
const cors = require('cors');
const PORT = 4000 || process.env.PORT;
const db = require('./DB');

//middleware
app.use(cors());
app.use(bodyParser.json());

db();

app.get('/', (req, res) => {
    res.send('sante');
})

app.use('/auth', require('./routes/auth'));


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})