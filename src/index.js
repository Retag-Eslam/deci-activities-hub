const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

// Setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))

// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, './client/pages/user.html'))
})

app.get('/users', async (req, res) => {
    try {
        const userData = await fetchUserData();
        res.json(userData);
    } catch (error) {
        res.status(500).send("Error fetching user data");
    }
})

async function fetchUserData() {
    try {
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        
        const data = await response.json();

        const users = data.map(user => {
            return new User(user.id, user.firstName, user.lastName, user.age, user.image);
        });

        return users;
    } catch (error) {
        console.error("Error occurred while fetching data:", error);
        throw error;
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))