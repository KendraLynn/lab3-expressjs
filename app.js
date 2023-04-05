const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route
app.get('/', (req, res) => {
    const uname = req.query.uname;
    if (uname) {
        req.username = uname.trim().toLowerCase();
    } else {
        req.username = null;
    }

    res.render('index', {
        username: req.username
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
