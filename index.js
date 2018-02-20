import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_URI,
  DB_URL = `${DB_USER}:${DB_PASS}@${DB_URI}`
} = process.env;



const app = express(),
      port = 3000,
      DB_HOST = `mongodb://${DB_URL}/${DB_NAME}`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

Mongoose.Promise = global.Promise;

Mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Connected to MongoDB at: ${DB_HOST}`);
  })
  .catch((error) => {
    if (error.message && error.message.search('MongoError: connect ECONNREFUSED') !== -1) {
      console.log(`Check to make sure you've started the mongo service`, error.message);
    } else {
      console.log(error);
    }
  });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});


app.listen(port, () => {
  console.log(`CLASS-APP IS RUNNING ON localhost:${port}`);
});
