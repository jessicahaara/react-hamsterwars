const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 1111

const buildFolder = path.join(__dirname, '../build')
const imageFolder = path.join(__dirname, './img');

const hamsters = require('./routes/hamsters.js');
const matches = require('./routes/matches.js');

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url} `, req.params);
	next()
})

app.use(express.json())
app.use(cors())

app.use(express.static(buildFolder))
app.use('/img', express.static(imageFolder));

app.use('/hamsters', hamsters);
app.use('/matches', matches);
// app.use('/matchwinners', matchwinners);
// app.use('/winners', winners);
// app.use('/losers', losers);
// app.use('/defeated', defeated);
// app.use('/score', score);
// app.use('/fewMatches', fewMatches);
// app.use('/manyMatches', manyMatches);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(PORT, (req, res) => {
	console.log(`Server started at PORT: ${PORT}`);
})