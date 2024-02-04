const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
app.use(express.json());

// app.post('/getToken', (req, res) => {
//     const { username, password } = req.body;

//     // Read and parse the user.json file
//     fs.readFile('./users.json', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading user file.');
//         }

//         const users = JSON.parse(data);
//         const user = users.find(u => u.username === username && u.password === password);

//         if (!user) {
//             return res.status(401).json({ error: 'Invalid credentials' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
        
//         res.json({ token });
//     });
// });

app.delete();


// Search function & endpoint
// app.get('/cards', (req, res) => {
//     let matchingCards = matchCards.cards;

//     const searchCards = funciton (req, matchingCards, activeSearch) {
        
//     }

//     Object.keys(req.query).forEach((activeSearch) => {
//         matchingCards = searchCards(req, matchingCards, activeSearch);
//     });
//     res.json(matchingCards)
// });

app.post();

app.put();

// Start the server
app.listen(3000, (req, res) => {
    console.log(`Server running on port ${3000}`)
});