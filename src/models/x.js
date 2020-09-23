let cities = require('./city.json').map(item=>{return {id:item.id,name:item.name}})
cities.sort((a,b)=>a['name']>b['name']?1:-1)
let data = cities.map(item=>item.id)
const fs = require('fs')
fs.writeFile('cities.json',JSON.stringify(data),()=>console.log("DONE"))

// arr = []
// const id = require('./cities.json')[0]
// require('https')
// fetch("api.openweathermap.org/data/2.5/weather?id=225284&appid=9d111c41ac6495d15f4cdfd33711fcce")
// .then(res=>res.json())
// .then(res=>console.log(res))
// .catch(e=>console.log(e))