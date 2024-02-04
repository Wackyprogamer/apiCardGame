const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const path = require('path');

const cards = require('./data/cards.json');
const cardPath = path.join(__dirname, "data/cards.json");
let id;
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

//Creating Cards -- Still Need Error Handling & Dups
app.post('/cards/create', (req, res) => {
    fs.readFile(cardPath, "utf8", (err, data) => {
       // Error Handling added later
        if (err) res.send("error reading file", err);
        try {
            console.log(req.body);
            let newCard;
            const jsonCards = JSON.parse(data);
            id = req.body.id ? req.body.id : 1;

        newCard = { ...req.body, id: id };
        jsonCards.cards.splice(id -1, 0, newCard);

        fs.writeFile(cardPath, JSON.stringify(jsonCards, null, 2), (err) => {
            if (err) console.error("error writing file", err);
        });

        let succesDeck = `Your Card was added to the deck: ${JSON.stringify(newCard)}`
        res.send(succesDeck);

        } catch (parseErr) {
            res.status(404).send("Error parsing JSON Data");
        }
    })
});

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