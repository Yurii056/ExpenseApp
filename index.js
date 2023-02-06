const express = require("express");
const fs = require("fs");
    
const app = express();
app.use(express.static(__dirname + "/public"));
const jsonParser = express.json();

// Create

app.post('/bank', (req, res) => {
const { name, type, owner, balance } = req.body;
const insertReq = `INSERT INTO bank (name, type, owner, balance) VALUES ($1, $2, $3, $4) RETURNING *`;
const values = [name, type, owner, balance];
pool.req(insertReq, values, (err, result) => {
if (err) {
return res.status(500).json({
success: false,
message: 'Error adding bank',
error: err.message
});
} else {return res.status(200).json({
success: true,
message: 'Bank successfully added',
bank: result.rows[0]
});
}
});
});

// Delete bank
app.delete('/bank/:id', (req, res) => {
const { id } = req.params;
const deleteReq = `DELETE FROM bank WHERE bank_id=$1`;
const values = [id];
pool.req(deleteReq, values, (err, result) => {
if (err) {
return res.status(500).json({
success: false,
message: 'Error deleting bank',
error: err.message
});
} else {
return res.status(200).json({
success: true,
message: 'Bank successfully deleted'
});
}
});
});

// Get one bank
app.get('/bank/:id', (req, res) => {
const { id } = req.params;
  const getReq = `SELECT * FROM bank WHERE bank_id=$1`;
const values = [id];
pool.req(getReq, values, (err, result) => {
if (err) {
return res.status(500).json({
success: false,
message: 'Error getting bank',
error: err.message
});
} else {
return res.status(200).json({
success: true,
message: 'Bank successfully retrieved',
bank: result.rows[0]
});
}
});
});, id]; pool.query(editquery, values, (err, result) => { 
if (err) { return res.status(500).json({ success: false, message: 'error editing bank', error: err.message }) 
} else { return res.status(200)
  .json({ success: true, message: 'bank successfully edited', bank: result.rows[0] }) } }) });`
  
  
  // Edit
app.put('/bank/:id', (req, res) => {
const {name, type, owner, balance} = req.body;
const {id} = req.params;
const editQuery = `UPDATE bank SET name=$1, type=$2, owner=$3, balance=$4 WHERE bank_id=$5 RETURNING *`;
const values = [name, type, owner, balance, id];
pool.query(editQuery, values, (err, result) => {
if (err) {
return res.status(500).json({
success: false,
message: 'Error editing bank',
error: err.message
});
} else {
return res.status(200).json({
success: true,
message: 'Bank successfully edited',
bank: result.rows[0]
});
}
});
});


// Get all
app.get('/bank', (req, res) => {
const getQuery = `SELECT * FROM bank`;
pool.query(getQuery, (err, result) => {
if (err) {
return res.status(500).json({
success: false,
message: 'Error getting banks',
error: err.message
});
} else {
return res.status(200).json({
success: true,
message: 'Banks successfully retrieved',
banks: result.rows
});
}
});
});

 Possible API Methods: 
 Bank: • createBank() – creates a new bank•
 deleteBank() – deletes an existing bank • 
 getBank() – retrieves information about a single bank • 
 getAllBanks() – retrieves information about all banks • 
 editBank() – edits an existing bank Transaction: •
 createTransaction() – creates a new transaction • 
 deleteTransaction() – deletes an existing transaction •
 getAllTransactions() – retrieves information about all transactions • 
 webhook() – sends a webhook when a transaction is created (optional API key authorization) 
 
 Category: 
 • createCategory() – creates a new category
 • deleteCategory() – deletes an existing category 
 • getCategory() – retrieves information about a single category
 • getAllCategories() – retrieves information about all categories
 • editCategory() – edits an existing category Statistics:
 • getStatistics() – accepts category ids, from period, to period, and returns an object in the format { category name: balance }, for example: { food: -2500, salary: +12000, gasoline: -700 } 
 Technical Requirements: • Node.js (framework is optional) • TypeScript • PostgreSQL










