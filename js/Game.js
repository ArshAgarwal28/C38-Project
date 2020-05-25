class Game {
    constructor() {

    }

    start() {
        player = new Player();

        form = new Form();
        form.display();
    }

    play() {
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);

        background("green");

        Player.playerInfo();
        var index = 0, x = 200, y;
        if (allPlayers !== undefined) {

        }
    }

    endState() {
        game.update(2);
    }
}
