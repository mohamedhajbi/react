const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const bodyParser = require('body-parser');

app.use(cors()); // Utilisation du middleware cors pour autoriser les requêtes CORS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3002;

// Configuration de la connexion à la base de données
const db = new sqlite3.Database('./test.db');

// Création de la table si elle n'existe pas
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS etudiants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lastname TEXT,
    firstname TEXT,
    ville TEXT
  )
`;
db.run(createTableQuery);

// Récupération des données de la base de données
app.get('/etudiants', (req, res) => {
  const sql = 'SELECT * FROM etudiants';
  db.all(sql, (error, rows) => {
    if (error) {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    } else {
      res.json(rows);
    }
  });
});

// Récupération d'un étudiant par ID
app.get('/etudiants/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM etudiants WHERE id = ?';
  db.get(sql, [id], (error, row) => {
    if (error) {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    } else {
      if (!row) {
        res.json({ lastname: "Etudiant n'existe pas" });
      } else {
        res.json(row);
      }
    }
  });
});

// Mise à jour d'un étudiant par ID
app.put('/etudiants/:id', (req, res) => {
  const id = req.params.id;
  const nom = req.body.lastname;
  const prenom = req.body.firstname;
  const sql = 'UPDATE etudiants SET lastname = ?, firstname = ? WHERE id = ?';
  db.run(sql, [nom, prenom, id], function (err) {
    if (err) {
      console.error('Error updating student', err);
      res.status(500).send('Error updating student');
    } else {
      res.send(`Student with ID ${id} updated successfully`);
    }
  });
});
// ajout 
app.post('/etudiants', (req, res) => {
  const nom = req.body.lastname;
  const prenom = req.body.firstname;
  const sql = 'INSERT INTO etudiants(lastname,firstname) VALUES (?,?)';
  db.run(sql, [nom, prenom], function (err) {
    if (err) {
      console.error('Error updating student', err);
      res.status(500).send('Error updating student');
    } else {
      res.send(`Student add successfully`);
    }
  });
});
// delete 
app.delete('/etudiants', (req, res) => {
  const id = req.body.id;
  const sql = 'delete from etudiants where id = ?';
  db.run(sql, [id], function (err) {
    if (err) {
      console.error('Error updating student', err);
      res.status(500).send('Error updating student');
    } else {
      res.send(`Student with ID ${id} delete successfully`);
    }
  });
});

// Recherche d'étudiants par nom et ville
app.get('/rechercher', (req, res) => {
  const nom = req.query.lastname + "%";
  const ville = req.query.ville + "%";
  const sql = 'SELECT * FROM etudiants WHERE lastname like ? AND ville like ?';
  db.all(sql, [nom, ville], function (err, rows) {
    if (err) {
      console.error('Error ', err);
      res.status(500).send('Error '); 
    } else {
      res.json(rows); 
    }
  });
});


//Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
