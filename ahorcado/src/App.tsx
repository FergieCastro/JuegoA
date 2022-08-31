import { useEffect, useState } from 'react'
import {letters} from "./helpers/letters";
import './App.css'
import { HangImage } from './components/HangImage';
import { getRandomWord } from './helpers/getRandomWord';

function App() {

 const [word] = useState(getRandomWord);
 const [hiddenWord, setHiddenWord] =  useState( '_ '.repeat(word.length ));
 const [ attempts, setAttemps] = useState(0);

const [lose, setLose] = useState( false );
const [won, setWon] = useState( false );


//Determinar si la persona perdio

useEffect( () =>{

  console.log(attempts);

  if(attempts >=9 ){
    setLose (true);
  }

}, [attempts])

//Determinar si la persona gano


useEffect(( ) =>{

console.log(hiddenWord);

const currentHiddenWord = hiddenWord.split(' ').join('');
console.log(currentHiddenWord);

if (currentHiddenWord === word){

  setWon(true);
}
  
} , [hiddenWord]
)


 const checkLetter = (letter: string) => {


  if( lose ) {return};

  if (!word.includes(letter) ){
    setAttemps ( Math.min ( attempts + 1, 9) );
    return;
  }

  const hiddenWordArray = hiddenWord.split(' ');

  for (let i = 0; i < word.length; i++){
    if (word[i] === letter){

      hiddenWordArray[i] = letter;
      
    }
  }

  setHiddenWord(hiddenWordArray.join(' '));

}

return (

  <div className="App">

    {/* Comentario en React */}

    {/*Imagenes*/}
    <HangImage imageNumber = {attempts}/>

    {/* Palabra oculta*/}
    <h3> {hiddenWord}</h3>

    {/* Contador de intentos */}
    <h3>Intentos: {attempts} </h3>

    {/* Mensaje de perdida*/}
    {
      (lose) ? 
      <h2>Lamentablemente. Usted ha perdido. La palabra correcta es: {word} .</h2> : ''
    }

    {/* Mensaje de ganar*/}
    {
      (won) ? 
      <h2> Felicidades! Usted ha adivinado la palabra correcta: {word} .</h2> : ''
    }

    {/* Botones de las letras */}
    
    {
      letters.map((letter) => (

        <button onClick={ () => checkLetter(letter)} key ={letter}>{letter}</button>

      ))
    }
  </div>
)   
}

export default App


