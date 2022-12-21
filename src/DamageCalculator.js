import React from 'react'

const arr=["Pokemon Name", "Pokemon Type", "Opponent HP"]

function DamageCalculator() {
  return (
    <div className='h-full w-full'>
      <h1>Here is the calculation of damage in the Battle Simulator</h1>
      <form>
        <div className='m-2'>
           { arr.map((obj)=>{
                return (<div className='m-2'>
                <label>{obj}: </label>
                <input type={obj==="Opponent HP" ? "number" : "text"} className='border-black border-2 ml-2' />
            </div>)
            })}
            <div className='m-2'>
                <label>Category: </label>
                <input type="radio" />
                <label className='m-2'>Physical</label>
                <input type="radio" />
                <label className='m-2'>Special</label>
            </div>
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




