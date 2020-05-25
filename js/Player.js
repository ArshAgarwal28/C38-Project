class Player {
    constructor() {
        this.name = null;
        this.index = null;
    }



    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name
        })
    }

    static playerInfo(){
        var playersNode = database.ref('players');
        playersNode.on("value", (data) => {
            allPlayers = data.val()
        })
    }
}
