import express from 'express';
import path from 'path';

const app = express();

const PORT = 3000;

app.use(express.static('dist'));

app.get('/*', (req, res) => {
	res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(PORT, function () {
	console.log('Server is running on http://localhost:3000');
});
