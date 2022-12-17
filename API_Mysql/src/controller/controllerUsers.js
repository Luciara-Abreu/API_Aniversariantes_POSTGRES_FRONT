const db = require('../db');
//o caminho dos modelos depende da sua estrutura
const Users = db.users;

exports.create = (req, res) => {
// Validando a requisição
if (!req.body.name) {
res.status(400).send ({
message: 'O conteúdo pode ser colocado aqui!'
});
return;
}

// Add novo aniversariante
const AddAniver = {
name: req.body.name,
birthDate: req.body.birthDate,
sexualOrientation: req.body.sexualOrientation,
email: req.body.email,
lastEmail: req.body.lastEmail,
fone: req.body.fone
};

// Salvando o novo aniversariante no banco de dados
AddAniver.create(users). then(data => {
res.send(data);
}) .catch(err => {
res.status(500).send ({
Message:
err.message || 'Alguns erros ocorrerão ao adicionar um novo aniversariante.'
      })
  })
}

//Para recuperar os objetos, você deve usar o código abaixo:
exports.findAll = (req, res) => {
  const Name = req.query.name;
  var condition = Name ? { Name: { [Op.like]: '%${name}%'}}: null;
  
  AddAniver.findAll({where: condition}). then(data => {
  res.send(data);
  }) .catch (err => {
  res.status(500).send({
  message:
  err.message || 'Ocorreu algum erro ao recuperar a lista de Aniversariantes..'
      });
    });
  };