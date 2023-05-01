const chartRoute = require('./routes/chart');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/column-chart-data', chartRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});