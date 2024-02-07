const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3001;

// Connexion à la base de données MongoDB
const MongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'etudiantsDB';
let db;
MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
if (err) {
console.error(err);
return;
}
console.log('Connecté à MongoDB');
db = client.db(dbName);
});
app.use(express.json());
app.use(cors());


app.get('/etudiants', (req, res) => {
  db.collection('etudiants').find().toArray((err, etudiants) => {
    if (err) {
        console.log(err);
        res.send("Error en req d'etudiants");
        return;
    }
    res.json(etudiants);
  });
});






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });