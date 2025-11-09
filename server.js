require('dotenv').config()

const express=require('express')
const app = express()
// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const { Pool } = require('pg');


const port = process.env.PORT || 3000;

// Connect to Neon (PostgreSQL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required by Neon
});

// Middleware (optional)
app.use(express.json());

// Test route to verify DB connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection failed');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//server to accept json
app.use(express.json())

//routes
const usersRouter = require('./routes/users')
app.use('/users',usersRouter)

app.listen(3000, ()=> console.log('Server Started'))