import React, { useState } from 'react'
import Affichage from './Affichage'
import ButtonMain from './ButtonMain'
import Education from '../assets/Education'
import Experience from '../assets/Experience';
import Skills from '../assets/Skills';
import Summary from '../assets/Summary';

function Main() {
  
 const [display,setDisplay] = useState(Summary);


 function mainButtonClicked(index){
  // const textToDisplay = "Hello after click";
  // setDisplay(textToDisplay);
  if(index==="Ed"){
  setDisplay(Education);
 
  }
  else if (index==="Ex")
  setDisplay(Experience)
  else
  setDisplay(Skills)
 }

 function restoreOpacity(){
  const menu = document.getElementById("menu");
  menu.classList.remove("toggle")
}

  return (
    <div className='main' onMouseLeave={restoreOpacity}>
      <Affichage value={display}/>
      <div className='main-buttons-container'>
      <ButtonMain value={"Education"} buttonClicked={mainButtonClicked} index={"Ed"} />
      <ButtonMain value={"Experience"} buttonClicked={mainButtonClicked} index={"Ex"} />
      <ButtonMain value={"Skills"} buttonClicked={mainButtonClicked} index={"Sk"}/>
      </div>
    </div>
  )
}

export default Main