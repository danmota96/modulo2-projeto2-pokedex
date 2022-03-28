//IMPORT
const express = require("express");
const { set } = require("express/lib/application");
const { get } = require("express/lib/response");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());



//ROUTE TO RECEIVE POKEMON DATA REGISTERED BY USER
app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/#card");
});

//ROUTES
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id - 1];
  res.render("details.ejs", { pokemon: pokemon });
});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  delete pokedex[id];
  res.redirect("/#cards");
});

app.get("/register/",(req,res) => {
  res.render("register.ejs");
});

app.get("/", (req, res) => {
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);

//Array
const pokedex = [
  {
    id: 1,
    name: "Bulbasaur",
    category: "Seed",
    abilities: "Overgrow",
    height: 0.7,
    weight: 6.9,
    type: "Grass",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    name: "Charmander",
    category: "Lizard",
    abilities: "Blaze",
    height: 0.6,
    weight: 8.5,
    type: "Fire",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    name: "Pidgey",
    category: "Tiny Bird",
    abilities: "Tangled Feet",
    height: 0.3,
    weight: 1.8,
    type: "Flying",
    description:
      "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back. ",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  },
  {
    id: 4,
    name: "Pikachu",
    category: "Mouse",
    abilities: "Static",
    height: 0.4,
    weight: 6,
    type: "Electric",
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
];
