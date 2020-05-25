var ball;

var database;

var playercount = 0, gamestate = 0;
var form, player, game;
var allPlayers;

var backgroundImg = "white";
var bg;

function preload() {

}


function setup(){
    createCanvas(displayWidth - 50,displayHeight - 150);

    database = firebase.database();

    game = new Game();
    game.start();
}

function draw(){
    background("white");

    drawSprites();
}
