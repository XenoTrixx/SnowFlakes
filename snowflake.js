class SonwFlake {

    constructor (x, y){
        this.position = createVector(x, y)
        this.speedFaktor = random(0.2, gravity);
        this.offSet = random(0, width);
    }

    update(){
        this.position.y += this.speedFaktor * gravity;
        this.position.x += map(noise(this.offSet), 0, 1, -2, 2);
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
