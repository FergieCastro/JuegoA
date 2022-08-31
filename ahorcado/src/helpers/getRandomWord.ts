let words: string[] = [

    'COMPUTADORA',
    'AGUACATE',
    'RESPONSABILIDAD',
    'AMOR',
    'ESTETOSCOPIO',
    'AMABILIDAD',
    'CAUTIVERIO',
    'CERVECERIA',
    'COMERCIALIZACION',
    'EDIFICACION',
    'ESTERILIZACION',
    'FRESA',
    'ZANAHORIA',
    'ACUEDUCTO',
    'CAPITALIZACION',

];


export function getRandomWord(){

    const randomIndex =( Math.floor (Math.random() * words.length));

    return words[randomIndex];
}