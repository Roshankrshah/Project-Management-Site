require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Starting Project Management Project with Graphql');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = 2525;
const start = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server listening at http://localhost:${PORT}`);
            })
        })
        .catch(err => {
            console.log(err);
        })
};

start();