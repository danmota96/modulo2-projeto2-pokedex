//importação
const express = require("express");
const { set } = require("express/lib/application");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//USER WILL SEND INPUT DATA BY DOCUMENT (JSON)
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index", { pokedex});
});
//ROUTE TO RECEIVE POKEMON DATA REGISTERED BY USER
app.post("/add", (req,res) =>{
  const pokemon = req.body;
  pokedex.push(pokemon);
  console.log(pokemon);
  res.redirect("/");
})

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);


const pokedex = [
  {
    id: 1,
    name: "Bulbasaur",
    category: "Seed",
    abilities: "Overgrow",
    height: "0.7 m" ,
    weight: "6.9 kg" ,
    type: "Grass",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    name: "Charmander",
    category: "Lizard",
    abilities: "Blaze",
    height: "0.7 m" ,
    weight: "6.9 kg" ,
    type: "Fire",
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    name: "Pidgey",
    category: "Tiny Bird",
    abilities: "Tangled Feet",
    height: "0.3 m" ,
    weight: "1.8 kg" ,
    type: "Flying",
    description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back. ",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  },
  {
    id: 4,
    name: "Pikachu",
    category: "Mouse",
    abilities: "Static",
    height: "0.7 m" ,
    weight: "6.9 kg" ,
    type: "Electric",
    description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
];

