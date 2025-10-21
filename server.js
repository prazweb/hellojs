require('dotenv').config();
const express = require('express'); 
const app = express(); 
app.use(express.json());
const port = process.env.PORT;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.get('/', (req, res) => res.send('My Week 2 API'));

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status (400).json({ error: 'Missing fields' }); 
    // Simulate DB save
    res.status(201).json({ message: `Hello, ${name}!` });
});

app.get('/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Sample User' });
});

app.listen(port, () => console.log(`API live on port ${port}`));