import { Button } from '@mui/material';
import React from 'react';
import Data from './Data';


// const arr=["Pokemon Name", "Pokemon Type", "Opponent Pokemon Name", "Opponent Pokemon Type", "Opponent HP"]

function ShowHideDiv() {
    const phy = document.getElementById("physical");
    const sp = document.getElementById("special");
    const phyAttack = document.getElementById("physicalAttack");
    const spAttack = document.getElementById("specialAttack");
    phyAttack.style.display = phy.checked ? "block" : "none";
    spAttack.style.display = sp.checked ? "block" : "none";
}

let power = 100;
let attk = 112;
let SpAttk = 100;
let def = 90;
let SpDef = 100;
let arr=[1, 1.5];
let crit = arr[Math.floor(arr.length*Math.random())];
let stab = 1.5;
let type = 1;
let hp = 105;
let category="Physical";
let formula1,formula2;
formula1 = ((0.25 * power * (attk / def) * crit) * stab * type) * hp / 100;
formula2 = ((0.25 * power * (SpAttk / SpDef) * crit) * stab * type) * hp / 100;

function calculate1(power,attk,def,crit,stab,type,hp){
    return formula1;
}
function calculate2(power,SpAttk,SpDef,crit,stab,type,hp){
    return formula2;
}
const move=(category==="Physical") ? formula1 : formula2;
// console.log(move);
// console.log(crit);

function DamageCalculator() {
  return (
    <div className='h-full w-full'>
      <h1>Here is the calculation of damage in the Battle Simulator</h1>
      <form>
        <div className='m-2'>
           {/* { arr.map((obj)=>{
                return (<div className='m-2'>
                <label>{obj}: </label>
                <input type={obj==="Opponent HP" ? "number" : "text"} className='border-black border-2 ml-2' />
                <input type={(obj==="Pokemon Type") ? <input type="number" /> : ""} />
            </div>)
            })} */}
            <div>
                <label for="pname">Pokemon Name: 
                    <input type="text" id="pname" className='m-2 border-black border-2'></input>
                </label>
            </div>
            <div>
                <label for="ptype">Pokemon Type: 
                    <select className='border-black border-2 m-2' name="type1" id="cars">
                        <option value="normal">normal</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="ice">ice</option>
                        <option value="fighting">fighting</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="flying">flying</option>
                        <option value="psychic">psychic</option>
                        <option value="bug">bug</option>
                        <option value="rock">rock</option>
                        <option value="ghost">ghost</option>
                        <option value="dark">dark</option>
                        <option value="dragon">dragon</option>
                        <option value="steel">steel</option>
                        <option value="fairy">fairy</option>
                    </select>
                    <select className='border-black border-2 m-2' name="type2" id="cars">
                        <option value="normal">normal</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="ice">ice</option>
                        <option value="fighting">fighting</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="flying">flying</option>
                        <option value="psychic">psychic</option>
                        <option value="bug">bug</option>
                        <option value="rock">rock</option>
                        <option value="ghost">ghost</option>
                        <option value="dark">dark</option>
                        <option value="dragon">dragon</option>
                        <option value="steel">steel</option>
                        <option value="fairy">fairy</option>
                    </select>
                </label>
            </div>
                <label for="oppname">Opponent Pokemon Name: 
                    <input type="text" id="oppname" className='m-2 border-black border-2'></input>
                </label>
            <div>
                <label for="pname">Opponent Pokemon Type: 
                    <input type="text" id="pname" className='m-2 border-black border-2'></input>
                    <input type="text" id="pname" className='m-2 border-black border-2'></input>
                </label>
            </div>
            <div>
                <label for="pname">Opponent HP: 
                    <input type="number" id="pname" className='m-2 border-black border-2'></input>
                </label>
            </div>
            <div className='m-2'>
                <span>Category: </span>
                <label for="physical">Physical
                    <input type="radio" id="physical" name="catg" className='m-2' onClick={ShowHideDiv} />
                </label>
                <label for="special">Special
                    <input type="radio" id="special" name="catg" className='m-2' onClick={ShowHideDiv} />
                </label>
            </div>
            <div className='m-2' id='physicalAttack' style={{display: 'none'}}>
                <label>Attack: </label>
                <input type="number" className='m-2 border-2 border-black' />
                <label>Opponent Defense:</label>
                <input type="number" className='m-2 border-2 border-black' />
            </div> 
            <div className='m-2' id='specialAttack' style={{display: 'none'}}>
                <label>Special-Attack: </label>
                <input type="number" className='m-2 border-2 border-black' />
                <label>Opponent Special-Defense:</label>
                <input type="number" className='m-2 border-2 border-black' />
            </div> 
        </div>
        <Button variant="contained" onClick={move}>Calculate</Button>
        <div>
            <label>Damage:
                <input type="number" className='m-2 border-2 border-black' />
            </label>
        </div>
       </form>
    </div>
  )
}

export default DamageCalculator


// let power = 100;
// let attk = 112;
// let SpAttk = 100;
// let def = 90;
// let SpDef = 100;
// let arr=[1, 1.5];
// let crit = arr[Math.floor(arr.length*Math.random())];
// let stab = 1.5;
// let type = 1;
// let hp = 105;
// let category="Physical";

// let formula1 = ((0.25 * power * (attk / def) * crit) * stab * type) * hp / 100;
// let formula2 = ((0.25 * power * (SpAttk / SpDef) * crit) * stab * type) * hp / 100;
// const move=(category==="Physical") ? formula1 : formula2;
// // console.log(move);
// console.log(crit);




