// Import npm packages.

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

const routes = require('./routes/api');

// feedbackDB password for coachNick: iMagic99.
// If we want to use mongoCluster, we can uncomment the following lines and use them as our mongoose.connect line.
// const MONGODB_URI = 'mongodb+srv://coachNick:iMagic99@feedbackdb.wakmd.mongodb.net/feedbackDB?retryWrites=true&w=majority';
// mongoose.connect(MONGODB_URI || 'mongodb://localhost/feedbackDB', {
    
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/feedbackDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS.
// app.use(cors());

// HTTP request logger.

app.use(morgan('tiny'));
app.use('/api', routes);

// Setting to production for deployment on Heroku.

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server running on ${PORT}.`));