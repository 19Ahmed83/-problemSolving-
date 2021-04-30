let states = [
    { id: 10, name: 'California', population:33450, area:1200},
    { id: 20, name: 'Florida', population:23758 ,area:3400},
    { id: 30, name: 'New Jersey', population:43569, area:2300 },
    { id: 40, name: 'New York', population:98901, area:550 },
    { id: 50, name: 'Ohio', population:45872, area:3400},
];

const fmr=(states)=>{
    return states
    .filter((state) => state.name[0] === 'N')
    .map((state) => ({"id": state.id, "name": state.name, "populationdensity": state.population / state.area}))
    .reduce((preVal, currentVal) => (preVal.populationdensity) > currentVal.populationdensity ? preVal.name : currentVal.name)
}
console.log(fmr(states))