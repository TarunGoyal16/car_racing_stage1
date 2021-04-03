var  dataBase,player,form,game;
var gamestate=0
var playerCount

function setup(){
  createCanvas(400,400)
  dataBase=firebase.database()
  game=new Game()
  game.getState()
  game.start()
}
function draw(){}