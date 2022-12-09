import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Pokedex from "./Pokedex";
import Stats from "./Stats";
import charmander from "./images/charmander.png";
import Data, { types } from "./Data";
import axios from "axios";
import mew from "./images/mew.png";
import { rows } from "./Data.js";

const tryRequire = (path) => {
  try {
    return [require(`${path}`), path];
  } catch (err) {
    return [require("./images/mew.png"), "./images/mew.png"];
  }
};

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
    // if (pokemons.length == 0) {
    //   return;
    // }
    // const urls = [];
    // for (let i = 364; i < 400;i++) {
    //   // console.log(pokemons[i], i)
    //   urls.push(pokemons[i].url)
    // }
    // axios.all(urls.map((url) => axios.get(url))).then((res) => {
    //   // console.log("res", res)
    //   for (let i = 0; i < res.length; i++){
    //     const data = res[i].data;
    //     let obj = {}
    //     obj["id"] = i+364;
    //     const rPath = `./images/${data.name.toLowerCase()}.png`;
    //     obj["imageUrl"] = tryRequire(rPath)[1];
    //     obj["name"] = data.name;
    //     let arr = [];
    //     for (let x of data["types"]) {
    //       arr.push(x.type.name)
    //     }
    //     obj["types"] = arr;
    //     arr = [];
    //     for (let x of data["abilities"]) {
    //       arr.push(x.ability.name)
    //     }
    //     obj["abilities"] = arr;
    //     arr = [];
    //     let sum = 0;
    //     for (let x of data['stats']) {
    //       arr.push(x.base_stat);
    //       sum += x.base_stat;
    //     }
    //     arr.push(sum);
    //     obj["stats"] = arr;
    //     console.log(obj);
    //     axios.post('http://localhost:8000/pokemon/add', obj).then((resp) => console.log("data added ", obj.name, i));
    //   }
    // })
  }, [pokemons]);

  return (
    <div className="h-full bg-green-400">
      <div className="h-full p-4 ">
        <Data />
        <Button
          onClick={() => setClicked(!clicked)}
          variant="contained"
          color="primary"
        >
          Add Team
        </Button>
        <div className="bg-blue-400 h-full w-full flex">
          <div className="h-full bg-orange-600 w-3/4">
            {clicked && <Pokedex />}
          </div>
          {/* <div className='w-1/4 bg-gradient-to-r from-orange-500 to-red-500 h-full'>
            <div className='w-full h-12 bg-yellow-400 flex'>
              {
                selectedPokemon.map(pokemon => {
                  return <img onClick={()=>setTeamPokemon(pokemon)} className='scale-125' src={require(`./images/${pokemon.toLowerCase()}.png`)} />
                })
              }
            </div>
            {teamPokemon && <h2 className='w-full text-center'>{teamPokemon}</h2>}
            <div className='w-full h-1/4 flex justify-center'>
              {teamPokemon && <img className='scale-[1.5]' src={require(`./images/${teamPokemon}.png`)} />}
            </div>
            <div className='w-full'>
              <div className='h-6 m-4 w-12 text-center border-black border-2 rounded bg-green-400'>Blaze</div>
            </div>
            <div className='w-full flex justify-center'> 
              {teamPokemon && <Stats selectedPokemon={teamPokemon} />}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Teambuilder;
export { rows };
