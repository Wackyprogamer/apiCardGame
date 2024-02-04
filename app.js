const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();

const cards = require('./data/cards.json');

app.use(express.json());


// Search function & endpoint
app.get('/cards', (req, res) => {
    let matchingCards = cards.cards;

    const searchCards = function (req, cards, activeSearch) {
        console.log('shalom');
    }

    Object.keys(req.query).forEach((activeSearch) => {
        matchingCards = searchCards(req, matchingCards, activeSearch);
    });

    res.json(matchingCards)
});

// app.post();

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

// app.delete();







// app.put();

// Start the server
app.listen(3000, (req, res) => {
    console.log(`Server running on port ${3000}`)
});