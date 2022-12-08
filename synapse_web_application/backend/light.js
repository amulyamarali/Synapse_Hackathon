const axios = require('axios');
require("dotenv").config()
const ids = [ 4,5,6 ];
const controlLight = async (lightId, on, hue, sat, bri )=>{
    try{
        return await axios.put(`http://192.168.1.140/api/cwZuDLiqIkf5jorfM07LHbS-M47imx6hNt32mhEU/lights/${lightId}/state`,
        { on,
        ...(sat &&{sat}),
        ...(bri && { bri }),
        ...(hue && { hue }),})

    }catch (err){
        console.error(err)
    }
};
var flag = false;
var count = 0;
// const interval = setInterval(()=>{
//     count++;
//     flag = !flag;
//     controlLight(ids[0],flag, 1332, 150, 175);
//     controlLight(ids[1],flag, 1332, 150, 175);
//     controlLight(ids[2],flag, 1332, 150, 175);
//     if(count == 20){
//         clearInterval(interval);
//     }
// },1000)

    controlLight(ids[2],true, 1332, 150, 175);
