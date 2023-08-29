const express=require('express')
const bodyParser=require('body-parser')
const fs = require('fs');
const cors=require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());
const companyData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// API endpoint to fetch company details by CIN number
app.post('/company', (req, res) => {
  var cin_no = req.body.cin;
  var company = companyData[req.body.cin];
  console.log(company)
  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ error: 'Company not found' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
