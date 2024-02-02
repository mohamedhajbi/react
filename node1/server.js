const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes, Op } = require('sequelize');



const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './test.db'
});

const Etudiant = sequelize.define('Etudiant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastname: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
  ville: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{ 
  tableName: "etudiants", 
  timestamps: false 
});


sequelize.sync().then(() => {
  console.log('La synchronisation avec la base de données est faite !');
}).catch((err) => {
  console.error('Erreur lors de la synchronisation avec la base de données :', err);
});

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/etudiants', (req, res) => {
  Etudiant.findAll({
    order: [
      ['id', 'DESC']
    ]
  }).then((etudiants) => {
    res.json(etudiants);
  });
});


app.get('/etudiants/:id', (req, res) => {
  const etudiantId = req.params.id;
  Etudiant.findByPk(etudiantId).then((etudiant) => {
    res.json(etudiant);
  });
});

app.post('/etudiants', (req, res) => {
  const { lastname, firstname, ville } = req.body; 
  Etudiant.create({ lastname, firstname, ville }).then((etudiant) => {
    res.json(etudiant);
  });
});

app.put('/etudiants/:id', (req, res) => {
  const etudiantId = req.params.id;
  const { lastname, firstname, ville } = req.body; 
  Etudiant.update({ lastname, firstname, ville }, { where: { id: etudiantId } }).then(() => {
    res.json({ message: 'Étudiant mis à jour avec succès' });
  });
});

app.delete('/etudiants/:id', (req, res) => {
  const etudiantId = req.params.id;
  Etudiant.destroy({ where: { id: etudiantId } }).then(() => {
    res.json({ message: 'Étudiant supprimé avec succès' });
  });
});
app.get('/rechercher', (req, res) => {
  const nom = req.query.lastname + "%";
  const ville = req.query.ville + "%";
  
  Etudiant.findAll({
    where: {
      lastname: { [Op.like]: nom },
      ville: { [Op.like]: ville }
    }
  })
  .then((etudiants) => {
    res.json(etudiants);
  })
  .catch((err) => {
    console.error('Error ', err);
    res.status(500).send('Error '); 
  });
});


const port = 3001;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
