class Form {
    constructor() {
        this.input = createInput("Name: ");
        this.button = createButton('Play');
        this.greetings = createElement('h3');
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth / 2 - 125, 0);

        this.input.position(displayWidth / 2 - 100, displayHeight / 6);

        this.button.position(displayWidth / 2 - 50, displayHeight / 4);


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playercount += 1;
            player.index = playercount;

            player.update();

            this.greetings.html("Hello " + player.name);
            this.greetings.position(displayWidth /2 - 125, displayHeight / 6);
        })
    }
}
