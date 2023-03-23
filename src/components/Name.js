import React, { useState } from 'react'

function Name() {

    const [name,setName] = useState("Abdelhalim Kamrani");

    function loopName(){
        const names= ["Abdelhalim Kamrani","Software Engineer","PhD Candidate","Network Data Analyst"];
        const randomNumber = Math.floor(Math.random() * 4);
        const nameCont = randomNumber !==4 ? names[randomNumber] : names[3];
        setName (nameCont);
    }
    
  
    // setName(loopName());
  return (
    <>
    <div className='name' id='nameId' onMouseOver={loopName} onClick={loopName}>{name}</div>
    </>
  )
}

export default Name