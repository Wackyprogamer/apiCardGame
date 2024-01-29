const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/getToken', (req, res) => {
    const { username, password } = req.body;

    // Read and parse the user.json file
    fs.readFile('./user.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading user file.');
        }

        const users = JSON.parse(data);
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
        
        res.json({ token });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
