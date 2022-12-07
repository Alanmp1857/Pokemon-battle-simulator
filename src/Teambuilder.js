import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Pokedex from "./Pokedex";
import Stats from "./Stats";
import charmander from "./images/charmander.png";
import { types } from "./Data";
import axios from "axios";

const fileteredData = [];

const details = [];

function Teambuilder() {
  const [clicked, setClicked] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [teamPokemon, setTeamPokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const url1 = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    axios.get(url1).then((resp) => {
      setPokemons(resp.data.results);
    });
  }, []);

  useEffect(() => {
    const urls = [];
    for (let ele of pokemons) {
      urls.push(ele.url);
    }
    axios.all(urls.map((url) => axios.get(url))).then((res) => {
      console.log(res.length);
      for (let i = 0; i < res.length; i++) {
        let obj = {};
        for (let ele in res[i].data) {
          if (ele === "name") {
            obj[ele] = res[i].data[ele];
          }
          if (ele === "abilities") {
            // console.log(res[i].data[ele][0].ability.name);
            obj[ele] = [
              res[i].data[ele][0].ability.name,
              res[i].data[ele].length > 1 && res[i].data[ele][1].ability.name,
            ];
          }
          if (ele === "types") {
            // console.log(
            //   res[i].data[ele][0].type.name,
            //   res[i].data[ele][1].type.name
            // );
            obj[ele] = [
              res[i].data[ele][0].type.name,
              res[i].data[ele].length > 1 && res[i].data[ele][1].type.name,
            ];
          }
          if (ele === "stats") {
            let stats = [
              { hp: res[i].data[ele][0].base_stat },
              { Atk: res[i].data[ele][1].base_stat },
              { Def: res[i].data[ele][2].base_stat },
              { Spa: res[i].data[ele][3].base_stat },
              { Spd: res[i].data[ele][4].base_stat },
              { Spe: res[i].data[ele][5].base_stat },
            ];
            let sum = 0;
            for (let obj of res[i].data[ele]) {
              sum += obj.base_stat;
            }
            stats.push({ Bst: sum });
            // console.log(stats);
            obj["stats"] = stats;
          }
        }
        console.log(obj);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        };
        fetch("http://localhost:8000/pokemon", requestOptions)
          .then((response) => response.json())
          .then((data) => this.setState({ postId: data.id }));
      }
      // console.log(res[i]);
      // console.log(res[i].data.abilities[0].ability.name);
      // console.log(res[i].data.abilities[1].ability.name);
    });
  }, [pokemons]);

  return (
    <div className="h-full bg-green-400">
      <div className="h-full p-4 ">
        <Button
          onClick={() => setClicked(!clicked)}
          variant="contained"
          color="primary"
        >
          Add Team
        </Button>
        <div className="bg-blue-400 h-full w-full flex">
          <div className="h-full bg-orange-600 w-3/4">
            {clicked && <Pokedex sPokemon={setSelectedPokemon} />}
          </div>
          <div className="w-1/4 bg-gradient-to-r from-orange-500 to-red-500 h-full">
            <div className="w-full h-12 bg-yellow-400 flex">
              {selectedPokemon.map((pokemon) => {
                return (
                  <img
                    onClick={() => setTeamPokemon(pokemon)}
                    className="scale-125"
                    src={require(`./images/${pokemon.toLowerCase()}.png`)}
                  />
                );
              })}
            </div>
            {teamPokemon && (
              <h2 className="w-full text-center">{teamPokemon}</h2>
            )}
            <div className="w-full h-1/4 flex justify-center">
              {teamPokemon && (
                <img
                  className="scale-[1.5]"
                  src={require(`./images/charmander.png`)}
                />
              )}
            </div>
            <div className="w-full">
              <div className="h-6 m-4 w-12 text-center border-black border-2 rounded bg-green-400">
                Blaze
              </div>
            </div>
            <div className="w-full flex justify-center">
              {teamPokemon && <Stats selectedPokemon={selectedPokemon} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teambuilder;
