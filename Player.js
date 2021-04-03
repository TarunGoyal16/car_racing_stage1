class Player{
    constructor(){

    }
    getCount(){
        var playercountref=dataBase.ref("playerCount")
        playercountref.on("value",function (data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        dataBase.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex="player"+playerCount
        dataBase.ref(playerIndex).set({
            name:name
        })
    }
}