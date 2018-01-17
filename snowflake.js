class SonwFlake {

    constructor (x, y){
        this.position = createVector(x, y)
        this.speedFaktor = random(0.2, gravity);
    }

    update(){
        this.position.y += this.speedFaktor * gravity;
    }

    show(){
        image(img, this.position.x, this.position.y, this.speedFaktor / 2 * 90, this.speedFaktor / 2 * 90)    
    }

    hitBorder() {
        if (this.position.y >= windowHeight){
            return true;
        }else{
            return false;
        }
    }
}