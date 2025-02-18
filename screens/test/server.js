
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./user.db', (err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    function (err) {
      if (err) {
        console.error('Error inserting user: ', err);
        res.status(500).send('Error inserting user');
      } else {
        console.log(`User inserted with ID: ${this.lastID}`);
        res.status(200).send('User inserted successfully');
      }
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
