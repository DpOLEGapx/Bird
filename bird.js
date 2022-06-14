const BIRD_YELL = ['Hello!','Shalom!','Aloha!','Bom dia!','Salute!','Guten Tag!','Hola!','Bonjour!','Zdravo!','Terve!'];

const scene = document.querySelector('.scene');
const counter = document.querySelector('.counter');
let counterVal = 0;

//----- CREATE BIRD CLASS -----//
class Bird {
    
    constructor(option) {

        this.coordinateY = option.coordinateY;
        this.coordinateX = option.coordinateX;
        this.color = option.color;
        this.yell = option.yell;  
    }
}

//----- CREATE BIRD OBJECT -----//
function createBird(birdCoordinates) {

    let birdClass = new Bird({
    
        coordinateY: this.event.pageY,
        coordinateX: this.event.pageX,
        color: generationNumber(1,10),
        yell: BIRD_YELL[generationNumber(0,9)]
    });

    const bird = document.createElement('figure');
    bird.classList.add('bird', 'bird--color-' + birdClass.color + '');
    bird.style.top = birdClass.coordinateY + 'px';
    bird.style.left = birdClass.coordinateX + 'px';
    bird.innerHTML = `
        <figure class="bird__body"></figure>
        <figure class="bird__head">
            <figure class="eye eye--left"></figure>
            <figure class="eye eye--right"></figure>
        </figure>
        <figure class="bird__wing bird__wing--left"></figure>
        <figure class="bird__wing bird__wing--right"></figure>
        <figure class="bird__yell">` + birdClass.yell + `</figure>`

    scene.insertAdjacentElement('beforeend', bird);

    return bird;
}

//----- BIRD ADD SCENE -----//
scene.addEventListener('click', function(birdCoordinates) {

    const bird = createBird(birdCoordinates);

    bird.addEventListener('click', moveBird);
});

//----- BIRD ACTIONS -----//
function moveBird(event) {
 
    event.stopPropagation();

    //counter add number
    ++counterVal;

    counter.innerHTML = counterVal;

    //bird flight animation start
    const sceneCenterY = scene.clientHeight / 100 * 50;
    const sceneCenterX = scene.clientWidth / 100 * 50;
    
    if(sceneCenterX > event.clientX) {

        this.style.left = '-61px'; 
    }
    else {
        this.style.left = 'calc(100% + 61px)';
    };

    if(sceneCenterY > event.clientY) {

        this.style.top = '-30px';
    }
    else {
        
        this.style.top = 'calc(100% + 80px)';
    };  

    //bird flight animation return
    returnBird(this);
}

//----- BIRD FLIGHT ANIMATION RETURN -----//
function returnBird(item) {  

    setTimeout(function() {

        item.style.top = generationNumber(1,100) + '%',
        item.style.left = generationNumber(1,100) + '%';
    }, 5000);
}

//----- RANDOM NUMBER GENERATION FOR COLOR/YELL -----//
function generationNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}