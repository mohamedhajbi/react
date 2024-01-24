const express = require('express');
const app = express();
const port = 3002;
// Définition de l'en-tête pour permettre l'accès depuis n'importe où
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
next();
});
const Etudiants=[
    {id:1, name:"mo"},
    {id:2, name:"Ali"},
    {id:3, name:"Mariem"}
];
const Groupe=[
    {id:"ginf21", libelle:"génie informatique 21 cours de jour"},
    {id:"ginf22", libelle:"génie informatique 22 cours de soir"},
    {id:"ginf32", libelle:"génie informatique 23 cours de soir"},
];
app.get('/Etudiants', (req, res) => {
 res.json(Etudiants);
});
app.get('/Etudiants/:id', (req, res) => {
    const etudiantId = parseInt(req.params.id);
    const etudiant = Etudiants.find(etudiant => etudiant.id === etudiantId);
  });
  
app.get('/Groupe', (req, res) => {
    res.json(Groupe);
   });

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});