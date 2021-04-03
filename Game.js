class Game{
    constructor(){}
    getState(){
        var gamestateref=dataBase.ref("gameState")
        gamestateref.on("value",function (data){
            gamestate=data.val();
        })
    }
    start(){
        if(gamestate===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
}