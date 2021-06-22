class Form {

    constructor(){

        this.nameText = createElement('h2');
        this.nameInput = createInput();
        this.goalText = createElement('h2');
        this.kitsText = createElement('h2');

    }

    display(){

        this.nameText.html("Name : ")
        this.nameText.style('color', "yellow");
        this.nameText.position(dWidth/2 - 400, dHeight/2 - 200);

        this.nameInput.position(dWidth/2 - 300, dHeight/2 - 180);

        this.goalText.html("Goal : ")
        this.goalText.style('color', "yellow")
        this.goalText.position(dWidth/2 - 400, dHeight/2 - 100);

        this.kitsText.html("Kits : ")
        this.kitsText.style('color', "yellow");
        this.kitsText.position(dWidth/2 - 400, dHeight/2 + 100);

        var kit1 = createSprite(dWidth/2 - 100, dHeight /2 + 135, 50, 50);
        kit1.addImage("kit", kit1img);
        kit1.scale = 0.2;

        var kit2 = createSprite(dWidth/2, dHeight/2 + 135, 50, 50);
        kit2.addImage("kit2", kit2img);
        kit2.scale = 0.2;

        var kit3 = createSprite(dWidth/2 + 100, dHeight/2 + 135, 50, 50);
        kit3.addImage("kit3", kit3img);
        kit3.scale = 0.2;


    }

}