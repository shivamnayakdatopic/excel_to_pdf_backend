const express = require('express');
const cors = require('cors');  // Enable CORS for cross-origin requests
const excelToPdfRouter = require('./routes/excelToPdfRouter');  // Import the router
const wordToPdfRouter = require('./routes/wordToPdfRouter');

const app = express();
app.use(cors());  // Allow cross-origin requests from React

// Use the excelToPdfRouter for the "/excel-to-pdf" route
app.use('/excel-to-pdf', excelToPdfRouter);
// Use the wordToPdfRouter for the "/word-to-pdf" route
app.use('/word-to-pdf', wordToPdfRouter);

// Start the server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
