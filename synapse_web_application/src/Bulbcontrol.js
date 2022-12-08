import React from "react";
import axios from "axios";
import siren from "./siren.mp3"
import rickroll from "./rickroll.mp3"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import "./bulbcontrol.css";
// const sound = new Audio(rickroll)
const sirenSound = new Audio(siren)


// function Play(prop){
//   // unknownAndPersonInside();
//   const sirenSound = new Audio(prop.sound)
//   sirenSound.play()
// }


function Bulbcontrol(prop) {
  const [knownOrNot, setKnownOrNot] = useState(null)
  const [time, setTime] = useState(null)

  const ids = [6,7,8,9,10,11];
  const toastOptions = {
    position: "bottom-right",
    autoClose:5000,
    pauseOnHover:true,
    theme:'dark',
}
  const controlLight = async (lightId, on, hue, sat, bri) => {
    try {
      return await axios.put(
        `http://192.168.8.118/api/cwZuDLiqIkf5jorfM07LHbS-M47imx6hNt32mhEU/lights/${lightId}/state`,
        { on, ...(sat && { sat }), ...(bri && { bri }), ...(hue && { hue }) }
      );
    } catch (err) {
      console.error(err);
    }
  };
    
  useEffect(()=>{
    axios.get("http://localhost:1000/")
      .then(res => {
        setTime(res.data.time)
        setKnownOrNot(res.data.text)
        if(res.data.text == "Unknown"){
          // unknownAndPersonInside();
          test();
          // sirenSound.play()
          sirenSound.play()
        }
        // setTime(new Date(res.data.time))
        // console.log(res.data)
      })
      .catch(err => console.log(err))
  },[])
  // useEffect(()=>{
  //   console.log("Hi")
  //   if(knownOrNot == "Unknown"){
  //     unknownAndPersonInside();
  //   }
  // },[knownOrNot])
  

  function switchOff() {
    controlLight(ids[0], false, 9932, 100, 575);
    controlLight(ids[1], false, 9932, 100, 575);
    controlLight(ids[2], false, 9932, 100, 575);
    controlLight(ids[3], false, 9932, 100, 575);
    controlLight(ids[4], false, 9932, 100, 575);
    controlLight(ids[5], false, 9932, 100, 575);

    // sirenSound.pause()
    // sirenSound.currentTime = 0;
  }
  function knownPerson(){
    controlLight(ids[0], true, 9932, 100, 575);
    controlLight(ids[1], true, 9932, 100, 575);
    controlLight(ids[2], true, 9932, 100, 575);
    controlLight(ids[3], true, 9932, 100, 575);    
    controlLight(ids[4], true, 9932, 100, 575);    
    controlLight(ids[5], true, 9932, 100, 575);    

  }
  async function unknownAndPersonInside(){
    console.log("hi")
    controlLight(ids[0], true, 1832,250,575);//2bulbs must be white and one red
    controlLight(ids[1], true, 1832,250,575)
    controlLight(ids[2], true, 1832,250,575)
    controlLight(ids[3], true, 10932,100,575)
    controlLight(ids[4], true, 10932,100,575)
    controlLight(ids[5], true, 10932,100,575)

    toast.error(
      `Detected Unknown Individual on ${time} ,Alert Sent!`,toastOptions
  )
    const audio = new Audio(siren)
    await audio.play()
  }
  var flag = true
  async function test(){
    controlLight(ids[5], true, 10932,100,575)
    controlLight(ids[2], true, 10932,100,575)
    controlLight(ids[0], true, 10932,100,575)
    var count = 0;
    const myinterval = setInterval(()=>{
      flag = !flag;

      controlLight(ids[1], flag, 1832,250,575);//2bulbs must be white and one red
    controlLight(ids[3], flag, 1832,250,575)
    controlLight(ids[4], flag, 1832,250,575)
      count++;
      if(count == 25){
        clearInterval(myinterval)
      }

    },1000)
    
    toast.error(
      `Detected Unknown Individual on ${time} ,Alert Sent!`,toastOptions
  )
    const audio = new Audio(siren)
    await audio.play()
  }

  // async function sendMail(){
  //   const options = {
  //     method: 'POST',
  //     url: 'https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code',
  //     params: {phoneNumber: '9886433374', verifyCode: '482748374'},
  //     headers: {
  //       'X-RapidAPI-Key': 'c2bfe527a1msh2696cbd0b56d6ccp135e11jsn3d3164ee28c0',
  //       'X-RapidAPI-Host': 'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com'
  //     }
  //   };
    
  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }
  function unknownAndPersonOutside(){
    controlLight(ids[0], true, 10932, 100, 575);//all bulbs same colour - to be given
    controlLight(ids[1], true, 10932,100,575);
    controlLight(ids[2], true, 10932,100,575);
    controlLight(ids[3], true, 10932,100,575);
    controlLight(ids[4], true, 10932,100,575);
    controlLight(ids[5], true, 10932,100,575);
    console.log(typeof sound)
    toast.error(
      `Detected Unknown Individual on ${time} , Alert Sent!`,toastOptions
  );
  }
 
  return (
    <div className="buttonContainer">
      <span className="toggle" onClick={knownPerson}>
        Known
      </span>
      <span className="toggle" onClick={test}>
      Unknown And Person Inside
      </span>
      <span className="toggle" onClick={unknownAndPersonOutside}>
       Unknown And Person Outside
      </span>

  <span className="toggle" onClick={switchOff}>Reset</span>
      <ToastContainer/> 
    </div>

  );
}

export default Bulbcontrol;
