// function birdsCreate(birdNum) {

//     const BIRD_YELL = ['Hello!','Shalom!','Aloha!','Bom dia!','Salute!','Guten Tag!','Hola!','Bonjour!','Zdravo!','Terve!'];

//     const scene = document.querySelector('.scene');

//     //bird create
//     while (birdNum) { 

//         //start coordinates
//         let birdStartCoordinateY = Math.round((Math.random() * 100));
//         let birdStartCoordinateX = Math.round((Math.random() * 100));

//         //html
//         let birdItem = '<figure class="bird bird--color-' + numberGeneration(1,10) + '" style="top: '+ birdStartCoordinateY + '%; left: ' + birdStartCoordinateX + '%;"><figure class="bird__body"></figure><figure class="bird__head"><figure class="eye eye--left"></figure><figure class="eye eye--right"></figure></figure><figure class="bird__wing bird__wing--left"></figure><figure class="bird__wing bird__wing--right"></figure><figure class="bird__yell">' + BIRD_YELL[numberGeneration(0,9)] + '</figure></figure>'

//         scene.insertAdjacentHTML('beforeEnd', birdItem);

//         birdNum--;
//     }

//     //bird action
//     const birds = document.querySelectorAll('.bird');
//     const counter = document.querySelector('.counter');
//     let counterVal = 0;

//     birds.forEach(function(item) {

//         item.addEventListener('click', function() {     
        
//             //counter add number
//             ++counterVal;
        
//             counter.innerHTML = counterVal;
        
//             item.style.top = '-100%';
//             item.style.left = '-100%';
        
//             //action return
//             function birdReturn() {          
                
//                 let birdReturnCoordinateY = Math.round((Math.random() * 100));
//                 let birdReturnCoordinateX = Math.round((Math.random() * 100));
                
//                 item.style.top = birdReturnCoordinateY + '%';
//                 item.style.left = birdReturnCoordinateX + '%';
//             }

//             setTimeout(birdReturn, 1000);
        
//         });
//     });

//     //random number generation for color/yell
//     function numberGeneration(min, max) {
//         return Math.round(Math.random() * (max - min)) + min;
//     }
// }

// birdsCreate(3);

const BIRD_YELL = ['Hello!','Shalom!','Aloha!','Bom dia!','Salute!','Guten Tag!','Hola!','Bonjour!','Zdravo!','Terve!'];
const scene = document.querySelector('.scene');

class Bird {

    constructor(option) {

        this.coordinateY = option.coordinateY;
        this.coordinateX = option.coordinateX;
        this.color = option.color;
        this.yell = option.yell;  
        this.html = '<figure class="bird bird--color-' + this.color + '" style="top: '+ this.coordinateY + '%; left: ' + this.coordinateX + '%;"><figure class="bird__body"></figure><figure class="bird__head"><figure class="eye eye--left"></figure><figure class="eye eye--right"></figure></figure><figure class="bird__wing bird__wing--left"></figure><figure class="bird__wing bird__wing--right"></figure><figure class="bird__yell"></figure></figure>'   
    }
}

let i = 3;

while (i) { 

    const bird = new Bird({
        coordinateY: Math.round((Math.random() * 100)),
        coordinateX: Math.round((Math.random() * 100)),
        color: numberGeneration(1,10)
    });

    scene.insertAdjacentHTML('beforeEnd', bird.html);
    i--;
    
}

function numberGeneration(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}