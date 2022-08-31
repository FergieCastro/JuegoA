import image0 from '../assets/Recursos/assets/0.png';
import image1 from '../assets/Recursos/assets/1.png';
import image2 from '../assets/Recursos/assets/2.png';
import image3 from '../assets/Recursos/assets/3.png';
import image4 from '../assets/Recursos/assets/4.png';
import image5 from '../assets/Recursos/assets/5.png';
import image6 from '../assets/Recursos/assets/6.png';
import image7 from '../assets/Recursos/assets/7.png';
import image8 from '../assets/Recursos/assets/8.png';
import image9 from '../assets/Recursos/assets/9.png';

const ImagenesA: string[] = [
    
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,

];

interface Props{

    imageNumber: number;
}

export function HangImage({imageNumber}: Props){

    if(imageNumber >= 9){
        imageNumber = 9;
    }
    return(
        <img 
        src= {ImagenesA[imageNumber]}
        alt="Base del ahorcado" 
        style={{width: 250}} />
    );
    
}


