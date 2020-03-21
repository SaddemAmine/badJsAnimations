let animations = [
    {
        "name": "Circles",
        "description": "The first animation I ever made! It's a bunch of circles popping up all over the canvas. Oddly satisfying material.",
        "thumbnail": "thumbnails/circles.png",
        "src": "animations/circles.html"
    },
    {
        "name": "Pulse",
        "description": "Beep Bloop",
        "thumbnail": "thumbnails/pulse.png",
        "src": "animations/pulse.html"
    },
    {
        "name": "SnakeGame",
        "description": "Beep Bloop",
        "thumbnail": "thumbnails/SnakeGame.png",
        "src": "animations/SnakeGame.html"
    }
];

style = document.getElementsByTagName('style')[0]; 

for(i=0;i<animations.length;i++){

    style.innerHTML+=`.`+animations[i].name+`{

    background-image: linear-gradient(rgb(68, 68, 90),rgb(68, 68, 90)), url("`+animations[i].thumbnail+`");
    background-blend-mode: color;
    }
    `;
    style.innerHTML+=`.`+animations[i].name+`:hover{

        background-image: url("`+animations[i].thumbnail+`");
        background-blend-mode: color;
        }
    `;


    let card = document.createElement('div');
    card.classList.add(animations[i].name);
    card.classList.add("card");
    card.setAttribute("onclick","changeFrame('"+animations[i].name+"')")
    
    document.getElementById("info").appendChild(card);
}

function changeFrame(name){
    src = animations.find(element => element.name == name).src;
    document.getElementById("frame").src = src;   
}
