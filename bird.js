const BIRD_YELL = ['Hello!','Shalom!','Aloha!','Bom dia!','Salute!','Guten Tag!','Hola!','Bonjour!','Zdravo!','Terve!'];

const scene = document.querySelector('.scene');

//create bird class
class Bird {
    
    constructor(option) {

        this.coordinateY = option.coordinateY;
        this.coordinateX = option.coordinateX;
        this.color = option.color;
        this.yell = option.yell;  
    }
}

//random number generation for color/yell
function generationNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

//create bird object
function createBird() {

    let bird = new Bird({
    
        coordinateY: Math.round((Math.random() * 100)),
        coordinateX: Math.round((Math.random() * 100)),
        color: generationNumber(1,10),
        yell: BIRD_YELL[generationNumber(0,9)]
    });

    scene.insertAdjacentHTML('beforeEnd', 
    `<figure class="bird bird--color-` + bird.color + `" style="top: ` + bird.coordinateY + `%; left: ` + bird.coordinateX + `%;">
        <figure class="bird__body"></figure>
        <figure class="bird__head">
            <figure class="eye eye--left"></figure>
            <figure class="eye eye--right"></figure>
        </figure>
        <figure class="bird__wing bird__wing--left"></figure>
        <figure class="bird__wing bird__wing--right"></figure>
        <figure class="bird__yell">` + bird.yell + `</figure>
    </figure>`); 
}

//bird generation
function getBirds(numberBirds) {

    for (let i = 0; i < numberBirds; i++) { 
    
        createBird();
    };
    
    //bird animation
    const birds = document.querySelectorAll('.bird');
    const counter = document.querySelector('.counter');
    let counterVal = 0;
    
    birds.forEach(function(item) {
    
        item.addEventListener('click', function() {     
        
            //counter add number
            ++counterVal;
        
            counter.innerHTML = counterVal;
        
            item.style.top = '-100%';
            item.style.left = '-100%';
        
            //animation return
            function birdReturn() {          
                
                let birdReturnCoordinateY = Math.round((Math.random() * 100));
                let birdReturnCoordinateX = Math.round((Math.random() * 100));
                
                item.style.top = birdReturnCoordinateY + '%';
                item.style.left = birdReturnCoordinateX + '%';
            };
    
            setTimeout(birdReturn, 1000);
        
        });
    });
};

getBirds(3);