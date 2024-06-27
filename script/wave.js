class Wave{
    constructor(shift) {
        this.angle = 0;
        this.shift = shift;
        this.movement = 0;
        this.period = 2;
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
    }

    display() {
        
        for (let i=0; i <=360; i+=10) {
            let x = map(i, 0, 360, -r, r);
            //print(x);
            let amplitude = r * sqrt(1 - pow((x/r), 2));
            let y = amplitude*sin((i + this.angle + this.shift*this.movement)*this.period);

            stroke(this.r,this.g,this.b);
            fill(this.r,this.g,this.b);
            ellipse(x, y, 10, 10);
            this.col += 20;
          }
        
    }

    move() {
        this.angle += 1;
        this.movement = 1 + cos(this.angle);
        //print(this.movement);
    }
}