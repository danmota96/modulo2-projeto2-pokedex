// ROTAS IRÃO ENTRAR COMO FUNÇÃO
const Pokemon = require('../models/Pokemon');

const getAll = async (req,res) => {
    try {
        const pokedex = await Pokemon.findAll();
        res.render("index", {pokedex});
    } catch (err){
        res.status(500).send({err: err.message});
    }
}

module.exports = {
    getAll,
};